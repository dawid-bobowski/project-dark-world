import { ResponseData, User } from "@/app/lib/definitions";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.query;

  try {
    const user: User | null = await prisma.user.findUnique({
      where: {
        email: decodeURIComponent(email as string),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Failed to retrieve user: ", error);
    return res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
