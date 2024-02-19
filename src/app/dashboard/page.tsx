"use client";

import LogoutButton from "@/components/LogoutButton";
import { useSession } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";

const Page: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <ProtectedPage>
        <div className="flex flex-col h-screen">
          {/* Header */}
          <div className="flex justify-between align-center space-x-0 w-100 p-4 bg-blue-500 text-white p-4 text-lg font-semibold">
            <p>Dashboard</p>
            <LogoutButton />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4">
            {/* Content goes here */}
            <p>Welcome to your Dashboard, {session.user?.name}</p>
            {/* Add more content as needed */}
          </div>

          {/* Navigation Bar */}
          <div className="bg-gray-800 text-white p-4 flex justify-around">
            <button>Home</button>
            <button>Settings</button>
            <button>Profile</button>
          </div>
        </div>
      </ProtectedPage>
    )
  }
};

export default Page;
