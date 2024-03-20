"use client";

import { Character, Expedition } from "@prisma/client";
import ExpeditionCard from "./ExpeditionCard";
import { useEffect, useState } from "react";

type ExpeditionsListProps = {
  character: Character;
  expeditions: Expedition[];
};

const ExpeditionsList: React.FC<ExpeditionsListProps> = ({ character, expeditions }) => {
  const [characterState, setCharacterState] = useState<Character>(character);

  const activeExpedition = expeditions.find(
    (expedition) => expedition.id === characterState.activeExpedition
  );

  useEffect(() => {
    alert("For testing purposes, all expeditions take 3s.");
  }, []);

  return characterState.activeExpedition && activeExpedition ? (
    <ExpeditionCard
      expedition={activeExpedition}
      character={characterState}
      setCharacter={setCharacterState}
    />
  ) : (
    expeditions.map((expedition) => (
      <ExpeditionCard
        key={expedition.id}
        expedition={expedition}
        character={characterState}
        setCharacter={setCharacterState}
      />
    ))
  );
};

export default ExpeditionsList;
