import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { findOrCreateUser } from "@/app/lib/data";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

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
  // callbacks: {
  //   async signIn({ user }) {
  //     const { name, email } = user;
  //     if (name && email) {
  //       try {
  //         const newUuid = uuidv4();
  //         const hashedPassword = await bcrypt.hash("123", 10);
  //         const newUser = {
  //           id: newUuid,
  //           name,
  //           email,
  //           password: hashedPassword,
  //         };
  //         const user = await findOrCreateUser(newUser);
  //         if (user) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       } catch (error) {
  //         console.error(error);
  //         return false;
  //       }
  //     }
  //     return false;
  //   },
  // },
});

export { handler as GET, handler as POST };
