"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

import { gurajada } from "@/lib/fonts";
import { ScaleLoader } from "react-spinners";

const LoginButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
    setIsLoading(false);
  };

  return (
    <button
      onClick={() => {
        setIsLoading(true);
        handleSignIn();
      }}
      className={`${gurajada.className} flex flex-col px-4 py-2 mt-4 bg-white text-2xl text-[var(--black)] hover:bg-[var(--raisin-light)]`}
    >
      Step into the Dark World {isLoading && <ScaleLoader color="#fff" height={32} />}
    </button>
  );
};

export default LoginButton;
