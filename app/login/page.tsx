"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/ui/Loading";
import { unifrakturCook, gurajada } from "@/ui/fonts";
import { useUser } from "@/hooks/useUser";
import { useCharacter } from "@/hooks/useCharacter";

const LoginPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { user, login } = useUser();
  const { updateCharacter } = useCharacter();

  useEffect(() => {
    const getUser = async (email: string) => {
      const response = await fetch(`/api/user/${encodeURIComponent(email)}`);

      if (response.ok) {
        const userData = await response.json();
        login(userData);
      } else {
        alert("Something went wrong in getUser");
      }
    };

    if (session && session.user) {
      getUser(session.user.email as string);
    }
  }, [session]);

  useEffect(() => {
    if (session && user && user.characters.length > 0) {
      updateCharacter(user.characters[0]);
      router.push("/dashboard");
    } else if (session && user && user.characters.length === 0) {
      router.push("/sign-a-pact");
    }
  }, [user]);

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
            onClick={() => signIn("google")}
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
