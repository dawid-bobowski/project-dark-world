"use client";

import LogoutButton from "@/components/LogoutButton";
import { useSession } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";
import Image from "next/image";

const Page: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <ProtectedPage>
        <div className="flex flex-col h-screen">
          <div className="flex justify-between align-center space-x-0 w-100 p-4 bg-blue-500 text-white p-4 text-lg font-semibold">
            <p>Dashboard</p>
            <LogoutButton />
          </div>
          <div className="flex-1 p-4">
            <p>Welcome to your Dashboard, {session.user?.name}</p>
          </div>
          <div className="bg-gray-800 text-white flex justify-center gap-2 h-20 sticky bottom-0">
            <button className="flex flex-col justify-center items-center p-2 text-xs hover:bg-gray-950">
              <Image
                className="mix-blend-screen mb-1"
                src="/character.png"
                alt="Character menu icon"
                width={36}
                height={36}
              />
              <p>Character</p>
            </button>
            <button className="flex flex-col justify-center items-center p-2 text-xs hover:bg-gray-950">
              <Image
                  className="mix-blend-screen mb-1"
                  src="/inventory.png"
                  alt="Inventory menu icon"
                  width={36}
                  height={36}
              />
              <p>Inventory</p>
            </button>
            <button className="flex flex-col justify-center items-center p-2 text-xs hover:bg-gray-950">
              <Image
                className="mix-blend-screen mb-1"
                src="/quests.png"
                alt="Quests menu icon"
                width={36}
                height={36}
              />
              <p>Quests</p>
            </button>
          </div>
        </div>
      </ProtectedPage>
    )
  } else {
    return <div>no session</div>
  }
};

export default Page;
