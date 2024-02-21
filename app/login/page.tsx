"use client";

import Image from "next/image";
import { unifrakturCook, gurajada } from "@/app/ui/fonts";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn("google");
  }

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [router, session]);

  return (
    <div className="login-page flex flex-col items-center justify-center min-h-screen w-screen">
      <Image
        src="/pentagram.png"
        width={100}
        height={100}
        alt="Pentagram sign"
        className="mix-blend-screen"
      />
      <div className="login-section px-8 py-6 mt-4 text-left">
        <h3 className={`${unifrakturCook.className} login-title text-3xl font-bold text-center`}>Begin your journey, if you&apos;re brave enough...</h3>
        <div className="flex flex-col items-center justify-center mt-4">
        <button
          onClick={handleSignIn}
          className={`${gurajada.className} login-button px-4 py-2 mt-4 text-white text-2xl bg-[var(--black)] hover:bg-[var(--black-bean)]`}
        >
          Sign a Pact
        </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
