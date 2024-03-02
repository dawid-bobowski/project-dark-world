import { Character } from "@/lib/definitions";
import { ReactNode, createContext, useState } from "react";

interface CharacterContextType {
  character: Character | null;
  updateCharacter: (characterData: Character) => void;
}

export const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

interface CharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [character, setCharacter] = useState<Character | null>(null);

  const updateCharacter = (characterData: Character) => {
    setCharacter(characterData);
  };

  return (
    <CharacterContext.Provider value={{ character, updateCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
