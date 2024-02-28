"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { unifrakturCook } from "@/ui/fonts";

const Page: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="login-page flex flex-col items-center justify-center min-h-screen w-screen">
      <Image
        src="/pentagram.png"
        width={100}
        height={100}
        alt="Pentagram sign"
        className="cursor-pointer"
        onClick={handleRedirect}
      />
      <div className="login-section px-8 py-6 mt-4 text-left">
        <h3 className={`${unifrakturCook.className} login-title text-3xl font-bold text-center`}>
          You died.
        </h3>
      </div>
    </div>
  );
};

export default Page;
