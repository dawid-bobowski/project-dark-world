import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { unifrakturCook } from "@/lib/fonts";
import LoginButton from "@/components/login/LoginButton";

export const metadata: Metadata = {
  title: "Login",
  description: "Join the Dark World",
};

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <Image
        src="/logo.png"
        width={250}
        height={250}
        alt="Project Dark World Logo"
        priority={true}
        quality={25}
      />
      <Link
        href="/login"
        className={`${unifrakturCook.className} flex justify-center align-center text-3xl`}
      >
        <p className="text-center text-[var(--pale-dogwood)]">
          Would you dare to step <br />
          into the Dark World?
        </p>
      </Link>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
