"use client";

import { Character, Expedition } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

type BeginExpeditionButtonProps = {
  characterId: number;
  expedition: Expedition;
  disabled: boolean;
  isActive: boolean;
  setCharacter: Dispatch<SetStateAction<Character>>;
};

const BeginExpeditionButton: React.FC<BeginExpeditionButtonProps> = ({
  characterId,
  expedition,
  disabled,
  isActive,
  setCharacter,
}) => {
  const handleClick = async () => {
    const response = await fetch(`/api/characters/${characterId}/expedition`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        characterId,
        expeditionId: expedition.id,
        expeditionTime: expedition.time,
      }),
    });

    if (!response?.ok) {
      return console.log("Character patch failed");
    }

    const data = await response.json();
    setCharacter(data);
  };

  return (
    <button
      className="py-1 px-4 self-end text-black bg-white rounded sm:hover:bg-gray-300 disabled:bg-gray-500"
      onClick={handleClick}
      disabled={disabled}
      hidden={isActive}
      aria-label={expedition.title}
    >
      Begin
    </button>
  );
};

export default BeginExpeditionButton;
