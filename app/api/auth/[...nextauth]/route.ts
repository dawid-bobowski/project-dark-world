import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const handler = NextAuth({
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
                id: uuidv4(),
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
