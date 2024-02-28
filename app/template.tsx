"use client";

import { UserProvider } from "@/contexts/UserContext";
import { SessionProvider } from "next-auth/react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <SessionProvider>{children}</SessionProvider>
    </UserProvider>
  );
}
