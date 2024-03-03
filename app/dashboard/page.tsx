import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/session";
import { authOptions } from "@/lib/auth";
import { database } from "@/lib/database";
import TopBar from "@/components/dashboard/TopBar";
import MainMenu from "@/components/dashboard/MainMenu";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The nightmare unfolds!",
};

const DashboardPage: React.FC = async () => {
  const sessionUser = await getSessionUser();

  if (!sessionUser?.email) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const user = await database.user.findUnique({
    where: {
      email: sessionUser?.email,
    },
    select: {
      characters: true,
    },
  });

  if (user?.characters.length === 0) {
    redirect("/sign-a-pact");
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar character={user.characters[0]} />
      <div className="flex-1 p-4">{/* main content here */}</div>
      <MainMenu />
    </div>
  );
};

export default DashboardPage;
