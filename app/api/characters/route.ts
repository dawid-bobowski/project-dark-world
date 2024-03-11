import { NextRequest, NextResponse } from "next/server";

import { database } from "@/lib/database";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return new NextResponse(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const { userId, name, characterClass } = await req.json();

    const character = await database.character.create({
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

    return new NextResponse(JSON.stringify(character), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return new NextResponse(
        JSON.stringify({ message: `Failed to create a character: ${error}` }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.error("Failed to create a character: ", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await database.$disconnect();
  }
}

export { handler as POST };
