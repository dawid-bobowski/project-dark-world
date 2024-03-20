"use client";

import { Character } from "@prisma/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ExpeditionTimerProps = {
  expeditionTime: number;
  characterId: number;
  characterExpeditionEnd: Date;
  setCharacter: Dispatch<SetStateAction<Character>>;
};

const ExpeditionTimer: React.FC<ExpeditionTimerProps> = ({
  expeditionTime,
  characterId,
  characterExpeditionEnd,
  setCharacter,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(3); // change to expeditionTime after done with testing

  const handleExpeditionFinished = async () => {
    const response = await fetch(`/api/characters/${characterId}/expedition-end`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        characterId,
      }),
    });

    if (!response?.ok) {
      return console.log("Character patch failed");
    }

    const data = await response.json();
    setCharacter(data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleExpeditionFinished();
    }
  }, [timeLeft]);

  return (
    <div>
      time left: {timeLeft}/{expeditionTime}
    </div>
  );
};

export default ExpeditionTimer;
