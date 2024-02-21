"use client";

import ProtectedPage from "@/ui/ProtectedPage";
import TopBar from "@/ui/dashboard/TopBar";
import MainMenu from "@/ui/dashboard/MainMenu";

const Page: React.FC = () => {
  return (
    <ProtectedPage>
      <div className="flex flex-col h-screen">
        <TopBar />
        <div className="flex-1 p-4">
          <p>Welcome to your Dashboard!</p>
        </div>
        <MainMenu />
      </div>
    </ProtectedPage>
  )
};

export default Page;
