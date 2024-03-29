"use client";

import { FormEvent, useState } from "react";
import { gurajada } from "@/lib/fonts";
import { useRouter } from "next/navigation";

type CharacterFormProps = {
  userId: string;
};

const CharacterForm: React.FC<CharacterFormProps> = ({ userId }) => {
  const [characterName, setCharacterName] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        name: characterName,
        characterClass: "warrior",
      }),
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
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
  );
};

export default CharacterForm;
