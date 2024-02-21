import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/ui/Loading";

interface ProtectedPageProps {
  children: React.ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <>{session ? children : <Loading />}</>
  );
};

export default ProtectedPage;
