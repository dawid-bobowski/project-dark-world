"use client";

import { useSession } from "next-auth/react";
import ProtectedPage from "@/ui/ProtectedPage";
import { unifrakturCook } from "@/ui/fonts";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <ProtectedPage>
        <div className="flex min-h-screen flex-col items-center justify-center p-6">
          <h1 className={`${unifrakturCook.className} text-3xl text-center`}>Welcome, {session.user?.name},<br />let&apos;s have a deal...</h1>
        </div>
      </ProtectedPage>
    );
  }
}
