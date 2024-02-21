"use client";

import Link from "next/link";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Link
        href="/login"
        className="flex justify-center align-center"
      >
        <ArrowLeftEndOnRectangleIcon className="w-20" />
      </Link>
    </main>
  );
}
