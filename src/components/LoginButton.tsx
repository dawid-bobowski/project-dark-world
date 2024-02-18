"use client";

import { gurajada } from "@/app/ui/fonts";
import { signIn } from "next-auth/react";

const LoginButton: React.FC = () => {
  const handleSignIn = () => {
    signIn("google");
  }

  return (
    <button
      onClick={handleSignIn}
      className={`${gurajada.className} login-button px-4 py-2 mt-4 text-white text-xl rounded-lg hover:bg-red-950`}
    >Sign a Pact</button>
  );
};

export default LoginButton;