"use client";

import { unstable_noStore as noStore } from "next/cache";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/ui/Loading";
import { unifrakturCook, gurajada } from "@/ui/fonts";
import { User } from "@/lib/definitions";
import { useUser } from "@/hooks/useUser";

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { login } = useUser();

  useEffect(() => {
    const getUser = async (email: string) => {
      noStore();

      const response = await fetch(`/api/user/${encodeURIComponent(email)}`);

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        login(userData);
      }
    };

    if (session && session.user && !user) {
      getUser(session.user.email as string);
    }

    if (session && user) {
      router.push("/dashboard");
    }

    if (session && !user) {
      router.push("/sign-a-pact");
    }
  }, [login, router, session, user]);

  const handleSignIn = async () => {
    await signIn("google");
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="login-page flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="login-section px-8 py-6 mt-4 text-left">
        <h3 className={`${unifrakturCook.className} login-title text-3xl font-bold text-center`}>
          Begin your journey, if you&apos;re brave enough...
        </h3>
        <div className="flex flex-col items-center justify-center mt-4">
          <button
            onClick={handleSignIn}
            className={`${gurajada.className} login-button px-4 py-2 mt-4 bg-white text-2xl text-[var(--black)] hover:bg-[var(--raisin-light)]`}
          >
            Step into the Dark World
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
