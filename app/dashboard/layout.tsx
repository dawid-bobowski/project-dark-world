import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/session";
import { authOptions } from "@/lib/auth";
import { database } from "@/lib/database";
import ErrorPage from "@/app/error/page";
import TopBar from "./components/TopBar";
import MainMenu from "./components/MainMenu";

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.email) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const user = await database.user.findUnique({
    where: {
      email: sessionUser.email,
    },
    select: {
      characters: true,
    },
  });

  if (user && user.characters.length === 0) {
    redirect("/sign-a-pact");
  }

  if (!user) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar character={user.characters[0]} />
      <div className="flex-1 p-4">{children}</div>
      <MainMenu />
    </div>
  );
};

export default DashboardLayout;
