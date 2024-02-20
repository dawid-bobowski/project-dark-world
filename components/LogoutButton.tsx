"use client";

import { signOut } from "next-auth/react";
import { FireIcon } from "@heroicons/react/24/solid";

const LogoutButton: React.FC = () => {
  
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  }

  return (
    <button
      onClick={handleSignOut}
      className="logout-button text-xl rounded-lg"
    >
      <FireIcon className="w-8 hover:text-blue-950 transition-all" />
    </button>
  );
};

export default LogoutButton;