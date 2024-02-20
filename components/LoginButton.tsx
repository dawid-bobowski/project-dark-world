"use client";

import { gurajada } from "@/app/ui/fonts";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginButton: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
  const handleSignIn = async () => {
    await signIn("google");
  }

  useEffect(() => {
    if (session) {
      router.push("/sign-a-pact");
    } else {
      router.push("/dashboard");
    }
  }, [router, session]);

  return (
    <button
      onClick={handleSignIn}
      className={`${gurajada.className} login-button px-4 py-2 mt-4 text-white text-xl rounded-lg hover:bg-red-950`}
    >Sign a Pact</button>
  );
};

export default LoginButton;