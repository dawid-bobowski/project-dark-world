"use client";

import { signOut } from "next-auth/react";

import { Character } from "@/lib/definitions";
import { PowerIcon } from "@heroicons/react/24/solid";

type TopBarProps = {
  character: Character;
};

const TopBar: React.FC<TopBarProps> = ({ character }) => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex justify-between align-center space-x-0 w-100 p-4 bg-[var(--black)] text-white p-4 text-lg font-semibold">
      <p>{character.name}</p>
      <button onClick={handleSignOut} className="logout-button text-xl rounded-lg">
        <PowerIcon className="w-8 hover:text-[var(--blood-red)] transition-all" />
      </button>
    </div>
  );
};

export default TopBar;
