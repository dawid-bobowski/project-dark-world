import { NextRequest, NextResponse } from "next/server";
import { database } from "@/lib/database";

async function handler(req: NextRequest) {
  if (req.method !== "GET") {
    return new NextResponse(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const expeditions = await database.expedition.findMany();

    return new NextResponse(JSON.stringify(expeditions), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to get expeditions: ", error);
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

export { handler as GET };
