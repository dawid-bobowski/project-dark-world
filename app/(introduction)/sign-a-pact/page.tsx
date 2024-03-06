import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/session";
import { authOptions } from "@/lib/auth";
import { database } from "@/lib/database";
import { unifrakturCook } from "@/lib/fonts";
import CharacterForm from "./components/CharacterForm";
import Loading from "@/app/components/Loading";

const SignPactPage: React.FC = async () => {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.email) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const user = await database.user.findUnique({
    where: {
      email: sessionUser.email,
    },
    select: {
      id: true,
      name: true,
    },
  });

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return user ? (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className={`${unifrakturCook.className} text-3xl text-center`}>
        Welcome, {sessionUser.name},<br />
        let&apos;s have a deal...
      </h1>
      <div className="mt-8 w-50">
        <CharacterForm userId={user.id} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SignPactPage;
