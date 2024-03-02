import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/ui/Providers";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Dark World",
  description: "Dark Fantasy Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
