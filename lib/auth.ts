import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { database } from "@/lib/database";
import { createId } from "@paralleldrive/cuid2";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const { name, email } = user;
      if (name && email) {
        try {
          let dbUser = await database.user.findUnique({
            where: { email },
          });

          if (!dbUser) {
            dbUser = await database.user.create({
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
};
