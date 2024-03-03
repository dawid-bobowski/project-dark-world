import { Character } from "@/lib/definitions";
import ProgressBars from "./ProgressBars";
import LogOutButton from "./LogOutButton";

type TopBarProps = {
  character: Character;
};

const TopBar: React.FC<TopBarProps> = ({ character }) => {
  return (
    <div className="flex justify-between align-center space-x-0 w-100 p-4 bg-[var(--black)] text-white p-4">
      <p className="self-center text-lg font-semibold">{character.name}</p>
      <ProgressBars characterId={character.id} />
      <LogOutButton />
    </div>
  );
};

export default TopBar;
