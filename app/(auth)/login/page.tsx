import { Metadata } from "next";
import { unifrakturCook } from "@/lib/fonts";
import LoginButton from "@/components/login/LoginButton";

export const metadata: Metadata = {
  title: "Login",
  description: "Join the Dark World",
};

const LoginPage: React.FC = () => {
  return (
    <div className="login-page flex flex-col items-center justify-center min-h-screen w-screen">
      <div className="login-section px-8 py-6 mt-4 text-left">
        <h3 className={`${unifrakturCook.className} login-title text-3xl font-bold text-center`}>
          Begin your journey, if you&apos;re brave enough...
        </h3>
        <div className="flex flex-col items-center justify-center mt-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
