"use client";

import MainMenu from "@/components/MainMenu";
import ProtectedPage from "@/components/ProtectedPage";
import TopBar from "@/components/TopBar";

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
