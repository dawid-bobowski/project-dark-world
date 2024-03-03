"use client";

import { signOut } from "next-auth/react";
import { PowerIcon } from "@heroicons/react/24/solid";

const LogOutButton: React.FC = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <button onClick={handleSignOut} className="logout-button text-xl rounded-lg">
      <PowerIcon className="w-8 hover:text-[var(--blood-red)] transition-all" />
    </button>
  );
};

export default LogOutButton;
