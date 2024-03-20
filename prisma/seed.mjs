import { PrismaClient } from "@prisma/client";

const EXPEDITIONS = [
  {
    title: "Expedition 1",
    description: "Traverse the cursed moors to unearth the Crypt of Shadows.",
    time: 30,
    experience: 100,
    gold: 25,
  },
  {
    title: "Expedition 2",
    description: "Descend into the Abyssal Chasm to seal the demon portal.",
    time: 60,
    experience: 220,
    gold: 55,
  },
  {
    title: "Expedition 3",
    description: "Navigate the Labyrinth of Nightmares to claim the Scepter of Dreams.",
    time: 120,
    experience: 480,
    gold: 120,
  },
  {
    title: "Expedition 4",
    description: "Scale the Haunted Peaks to confront the spectral dragon.",
    time: 240,
    experience: 1060,
    gold: 260,
  },
  {
    title: "Expedition 5",
    description: "Cross the Withering Wastelands to find the last Tree of Life.",
    time: 480,
    experience: 2330,
    gold: 570,
  },
  {
    title: "Expedition 6",
    description: "Penetrate the Fortress of the Damned to rescue the ensnared souls.",
    time: 720,
    experience: 5125,
    gold: 1250,
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
