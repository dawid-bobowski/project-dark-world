import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { createId } from "@paralleldrive/cuid2";

import prisma from "@/lib/database";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      const { name, email } = user;
      if (name && email) {
        try {
          let dbUser = await prisma.user.findUnique({
            where: { email },
          });

          if (!dbUser) {
            dbUser = await prisma.user.create({
              data: {
                name,
                email,
                id: createId(),
              },
            });
          }
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return false;
    },
  },
});

export { handler as GET, handler as POST };
