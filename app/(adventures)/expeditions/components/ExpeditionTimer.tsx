"use client";

import { useEffect, useState } from "react";

type ExpeditionTimerProps = {
  expeditionTime: number;
  characterExpeditionEnd: Date;
};

const ExpeditionTimer: React.FC<ExpeditionTimerProps> = ({
  expeditionTime,
  characterExpeditionEnd,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  console.log((characterExpeditionEnd.getTime() - Date.now()) / 1000, "s");

  // useEffect(() => {
  //   // const interval = setInterval(() => {
  //   //   setTimeLeft((prev) => prev - 1);
  //   // });
  //   // return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      time left: {timeLeft}/{expeditionTime}
    </div>
  );
};

export default ExpeditionTimer;
