"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import ProtectedPage from "@/ui/ProtectedPage";
import { gurajada, unifrakturCook } from "@/ui/fonts";
import { useUser } from "@/hooks/useUser";
import { useCharacter } from "@/hooks/useCharacter";

const SignPactPage: React.FC = () => {
  const [characterName, setCharacterName] = useState<string>("");
  const { character, updateCharacter } = useCharacter();
  const { data: session } = useSession();
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert("User is not set");
      return;
    }

    const response = await fetch("/api/character/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: characterName,
        userId: user.id,
        characterClass: "warrior",
      }),
    });

    if (response.ok) {
      const newCharacter = await response.json();
      updateCharacter(newCharacter);
    } else {
      alert("Something went wrong in postCharacter");
    }
  };

  useEffect(() => {
    if (character) {
      router.push("/dashboard");
    }
  }, [character]);

  return (
    <ProtectedPage>
      <div className="flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className={`${unifrakturCook.className} text-3xl text-center`}>
          Welcome, {session?.user?.name},<br />
          let&apos;s have a deal...
        </h1>
        <div className="mt-8 w-50">
          <form
            onSubmit={handleSubmit}
            className={`${gurajada.className} flex flex-col space-y-4 text-lg`}
          >
            <input
              type="text"
              id="characterName"
              name="characterName"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              placeholder="How should we call you here?"
              className="px-3 py-2 border border-gray-300 text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            />
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-white bg-[var(--raisin-black)] hover:bg-[var(--raisin-black-darker)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign a Pact
            </button>
          </form>
        </div>
      </div>
    </ProtectedPage>
  );
};

export default SignPactPage;
