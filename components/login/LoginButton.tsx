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
      className={`${gurajada.className} flex flex-col px-4 py-2 mt-8 bg-[var(--black)] text-2xl text-[var(--pale-dogwood)] border-[var(--pale-dogwood)] border-solid border-2 rounded hover:bg-[var(--raisin-black-darker)]`}
    >
      Sign a Pact
    </button>
  );
};

export default LoginButton;
