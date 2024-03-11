import { PrismaClient } from "@prisma/client";

const EXPEDITIONS = [
  {
    title: "Expedition 1",
    description: "Traverse the cursed moors to unearth the Crypt of Shadows.",
    time: 30,
  },
  {
    title: "Expedition 2",
    description: "Descend into the Abyssal Chasm to seal the demon portal.",
    time: 60,
  },
  {
    title: "Expedition 3",
    description: "Navigate the Labyrinth of Nightmares to claim the Scepter of Dreams.",
    time: 120,
  },
  {
    title: "Expedition 4",
    description: "Scale the Haunted Peaks to confront the spectral dragon.",
    time: 240,
  },
  {
    title: "Expedition 5",
    description: "Cross the Withering Wastelands to find the last Tree of Life.",
    time: 480,
  },
  {
    title: "Expedition 6",
    description: "Penetrate the Fortress of the Damned to rescue the ensnared souls.",
    time: 720,
  },
];

const database = new PrismaClient();

async function main() {
  database.$connect();

  // Insert expeditions
  for (const expedition of EXPEDITIONS) {
    const result = await database.expedition.create({
      data: expedition,
    });
    console.log("Inserted expedition:", result);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await database.$disconnect();
  });
