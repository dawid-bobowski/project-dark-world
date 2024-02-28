"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/ui/Loading";

interface ProtectedPageProps {
  children: React.ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return <Loading />;
  }

  return <>{session ? children : <Loading />}</>;
};

export default ProtectedPage;
