"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/contexts/UserContext";
import { CharacterProvider } from "@/contexts/CharacterContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <UserProvider>
        <CharacterProvider>{children}</CharacterProvider>
      </UserProvider>
    </SessionProvider>
  );
}
