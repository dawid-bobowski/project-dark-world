"use client";

import LoginButton from "@/components/LoginButton";
import ProtectedComponent from "@/components/ProtectedComponent";
import { SessionProvider } from "next-auth/react";
import { unifrakturCook } from "../ui/fonts";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <SessionProvider>
      <div className="login-page flex flex-col items-center justify-center min-h-screen w-screen">
        <Image
          src="/pentagram.png"
          width={100}
          height={100}
          alt="Pentagram sign"
        />
        <div className="login-section px-8 py-6 mt-4 text-left">
          <h3 className={`${unifrakturCook.className} login-title text-3xl font-bold text-center`}>Begin your journey, if you&apos;re brave enough...</h3>
          <div className="flex flex-col items-center justify-center mt-4">
            <LoginButton />
            <ProtectedComponent />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default Page;
