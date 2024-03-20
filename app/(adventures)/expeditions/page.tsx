import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/session";
import { authOptions } from "@/lib/auth";
import { database } from "@/lib/database";

import ErrorPage from "@/app/error/page";
import ExpeditionCard from "./components/ExpeditionCard";

const ExpeditionsPage: React.FC = async () => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.email) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const user = await database.user.findUnique({
    where: {
      email: sessionUser.email,
    },
    select: {
      id: true,
      characters: true,
    },
  });

  if (user && user.characters.length === 0) {
    redirect("/sign-a-pact");
  }

  if (!user) {
    return <ErrorPage />;
  }

  const character = user.characters[0];
  const expeditions = await database.expedition.findMany();

  if (!character || !expeditions) {
    return <ErrorPage />;
  }

  const activeExpedition = expeditions.find(
    (expedition) => expedition.id === character.activeExpedition
  );

  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {character.activeExpedition && activeExpedition ? (
        <ExpeditionCard expedition={activeExpedition} character={character} />
      ) : (
        expeditions.map((expedition) => (
          <ExpeditionCard key={expedition.id} expedition={expedition} character={character} />
        ))
      )}
    </div>
  );
};

export default ExpeditionsPage;
