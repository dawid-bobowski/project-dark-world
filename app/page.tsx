"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

import { unifrakturCook } from "@/lib/fonts";
import Loading from "@/app/components/Loading";

const HomePage: React.FC = () => {
  useEffect(() => {
    redirect("/login");
  }, []);

  return <Loading />;

  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-center">
  //     <Link
  //       href="/login"
  //       className={`${unifrakturCook.className} flex justify-center align-center text-4xl text-center text-[var(--pale-dogwood)] p-5`}
  //     >
  //       <p>{">> Click here to enter the Dark World <<"}</p>
  //     </Link>
  //   </main>
  // );
};

export default HomePage;
