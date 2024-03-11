import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/session";
import { authOptions } from "@/lib/auth";
import { database } from "@/lib/database";

import ErrorPage from "@/app/error/page";
import BeginExpeditionButton from "./components/BeginExpeditionButton";

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

  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {expeditions.map(
        ({ id, title, description, time }) =>
          (id === character.activeExpedition || !character.activeExpedition) && (
            <div
              key={title}
              className="w-full h-40 p-4 bg-black flex flex-col justify-between shadow-md rounded-lg"
            >
              <div className="w-full flex justify-between">
                <p>{title}</p>
                <p>time: {time / 60}h</p>
              </div>
              <div className="w-full flex">{description}</div>
              <BeginExpeditionButton
                {...{
                  characterId: character.id,
                  expeditionId: id,
                  title,
                  disabled: id !== character.activeExpedition,
                  isActive: id === character.activeExpedition,
                }}
              />
              {/* Insert client-side timer */}
            </div>
          )
      )}
    </div>
  );
};

export default ExpeditionsPage;
