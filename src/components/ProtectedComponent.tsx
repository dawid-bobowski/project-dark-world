"use client";

import { useSession } from "next-auth/react";

const ProtectedComponent: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return <p className="text-black">Welcome, {session.user?.name}</p>;
  }
  return <></>;
}

export default ProtectedComponent;