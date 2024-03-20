"use client";

import { Character, Expedition } from "@prisma/client";
import BeginExpeditionButton from "./BeginExpeditionButton";
import ExpeditionTimer from "./ExpeditionTimer";

type ExpeditionCardProps = {
  expedition: Expedition;
  character: Character;
};

const ExpeditionCard: React.FC<ExpeditionCardProps> = ({ expedition, character }) => {
  return (
    <div
      key={expedition.title}
      className="w-full h-40 p-4 bg-black flex flex-col justify-between shadow-md rounded-lg"
    >
      <div className="w-full flex justify-between">
        <p>{expedition.title}</p>
        <p>time: {expedition.time / 60}h</p>
      </div>
      <div className="w-full flex">{expedition.description}</div>
      <BeginExpeditionButton
        {...{
          characterId: character.id,
          expedition,
          disabled: !!character.activeExpedition,
          isActive: expedition.id === character.activeExpedition,
        }}
      />
      {character.activeExpedition && character.expeditionEnd && (
        <ExpeditionTimer
          expeditionTime={expedition.time}
          characterExpeditionEnd={character.expeditionEnd}
        />
      )}
    </div>
  );
};

export default ExpeditionCard;
