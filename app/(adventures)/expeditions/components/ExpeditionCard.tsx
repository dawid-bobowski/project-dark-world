"use client";

import { Character, Expedition } from "@prisma/client";
import BeginExpeditionButton from "./BeginExpeditionButton";
import ExpeditionTimer from "./ExpeditionTimer";
import { Dispatch, SetStateAction } from "react";

type ExpeditionCardProps = {
  expedition: Expedition;
  character: Character;
  setCharacter: Dispatch<SetStateAction<Character>>;
};

const ExpeditionCard: React.FC<ExpeditionCardProps> = ({ expedition, character, setCharacter }) => {
  return (
    (character.activeExpedition === expedition.id || !character.activeExpedition) && (
      <div
        key={expedition.title}
        className="w-full h-40 p-4 bg-black flex flex-col justify-between shadow-md rounded-lg"
      >
        <div className="w-full flex justify-between">
          <p>{expedition.title}</p>
          <p>time: {expedition.time}s</p>
        </div>
        <div className="w-full flex">{expedition.description}</div>
        <BeginExpeditionButton
          characterId={character.id}
          expedition={expedition}
          disabled={!!character.activeExpedition}
          isActive={expedition.id === character.activeExpedition}
          setCharacter={setCharacter}
        />
        {character.activeExpedition && character.expeditionEnd && (
          <ExpeditionTimer
            expeditionTime={expedition.time}
            characterId={character.id}
            characterExpeditionEnd={character.expeditionEnd}
            setCharacter={setCharacter}
          />
        )}
      </div>
    )
  );
};

export default ExpeditionCard;
