"use client";

import { signOut } from "next-auth/react";
import { FireIcon } from "@heroicons/react/24/solid";

const TopBar: React.FC = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex justify-between align-center space-x-0 w-100 p-4 bg-[var(--black)] text-white p-4 text-lg font-semibold">
      <p>Dashboard</p>
      <button onClick={handleSignOut} className="logout-button text-xl rounded-lg">
        <FireIcon className="w-8 hover:text-[var(--blood-red)] transition-all" />
      </button>
    </div>
  );
};

export default TopBar;
