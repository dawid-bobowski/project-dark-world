"use client";

import ProtectedPage from "@/components/ProtectedPage";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <ProtectedPage>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1>Welcome, {session.user?.name}, let&apos;s have a deal...</h1>
        </div>
      </ProtectedPage>
    );
  }
}
