"use client";

import { signIn } from "next-auth/react";
import { gurajada } from "@/lib/fonts";

const LoginButton: React.FC = () => {
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className={`${gurajada.className} flex flex-col px-4 py-2 mt-4 bg-white text-2xl text-[var(--black)] hover:bg-[var(--raisin-light)]`}
    >
      Step into the Dark World
    </button>
  );
};

export default LoginButton;
