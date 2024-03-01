"use client";

import { useSession } from "next-auth/react";

import ProtectedPage from "@/ui/ProtectedPage";
import Loading from "@/ui/Loading";
import MainMenu from "@/ui/dashboard/MainMenu";
import TopBar from "@/ui/dashboard/TopBar";
import { useCharacter } from "@/hooks/useCharacter";

const DashboardPage: React.FC = () => {
  const { data: session } = useSession();
  const { character } = useCharacter();

  return session && character ? (
    <ProtectedPage>
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 p-4">
          <p>Welcome, {character.name}!</p>
        </div>
        <MainMenu />
      </div>
    </ProtectedPage>
  ) : (
    <Loading />
  );
};

export default DashboardPage;
