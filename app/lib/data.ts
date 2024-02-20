import { sql } from "@vercel/postgres";
import { User } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function findOrCreateUser(user: {
  id: string;
  name: string;
  email: string;
  password: string;
}) {
  noStore();

  try {
    const foundUser = await sql`
      SELECT *
      FROM users
      WHERE email=${user.email}
    `;

    if (foundUser.rows.length !== 0) {
      return foundUser.rows[0] as User;
    }

    const newUser = await sql`
      INSERT INTO users (id, name, email, password)
      VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})
      RETURNING id, name, email
    `;

    return newUser;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
