import { Character, ResponseData } from "@/lib/definitions";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Character>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      name,
      userId,
      characterClass,
    }: { name: string; userId: string; characterClass: string } = req.body;

    const character: Character = await prisma.character.create({
      data: {
        userId,
        name,
        class: characterClass,
      },
      select: {
        id: true,
        name: true,
        class: true,
        level: true,
        experience: true,
      },
    });

    return res.status(200).json(character);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return res.status(400).json({ message: `Failed to create a character: ${error}` });
    }

    console.error("Failed to create a character: ", error);
    return res.status(500).json({ message: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
