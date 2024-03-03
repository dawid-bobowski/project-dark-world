import { database } from "@/lib/database";

type ProgressBarsProps = {
  characterId: number;
};

const ProgressBars: React.FC<ProgressBarsProps> = async ({ characterId }) => {
  const character = await database.character.findFirst({
    where: {
      id: characterId,
    },
    select: {
      name: true,
      class: true,
      level: true,
      experience: true,
    },
  });

  return (
    <div className="flex gap-4">
      <p className="self-center text-sm">level: {character?.level || "N/A"}</p>
      <p className="self-center text-sm">exp: {character?.experience || "N/A"}/25</p>
    </div>
  );
};

export default ProgressBars;
