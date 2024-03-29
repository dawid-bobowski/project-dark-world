# Project Dark World

In 2024, it might seem like the era of web-based RPG clicker games has passed, but I'm looking for a unique and engaging way to learn Next.js beyond the typical shopping list or single-page application (SPA) portfolio projects. To make the learning process more exciting and innovative, I plan to leverage all the latest functionalities of this React framework to develop a dark fantasy RPG web "app game".

## Tech Stack

- Next 14.1
- TypeScript 5
- React 18
- TailwindCSS 3.3
- NextAuth 4.24
- prisma/client 5
- vercel/postgres 0.7.2
- Node 20.11





## Next Steps

- character page;
- stats;
- equipment;
- inventory;
- create different game modes:
  - 🔜 expeditions, timed missions that give rewards after a period of time;
  - dungeons, gather a party of 4 heroes and venture into the dungeon to face its threats together in an automatically simulated fights with monsters;
  - raids, together with 15 other players join your forces and slay a giant demon for some big rewards;
  - weekly events, come up with some weekly events;
- progression system;
- guilds;
- rankings;
- achievements;

To implement dungeons and raids, the app would require a separate server that would handle web sockets. This way client would be able to connect to it and receive real-time updates.

## Current Focus

Expeditions:
- ✅️ add field to character table to include expedition start time;
- 🔜 create expeditions table with proper details about each expedition: name, description, time to complete, rewards (exp, gold, eq?); rewards haven't been added yet;
- add expedition timer on client side that would be calculated from the expedition start date retrieved from the backend. Once the timer ends, the reward button/screen/popup should show up.

## Known Issues

- bottom menu is above the content of the expeditions page (most probably in all other places too);
- users are unable to begin expedition after signing up.

If you find anything else, feel free to open a new issue.





### Initial Project Setup

```
npm i
npm i -g vercel
vercel
npx prisma generate
```

### Development

Run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prisma

Generate Prisma Client from schema file:

```
npx prisma generate
```

Update the database schema based on schema file:

```
npx prisma db push
```

Format schema file:

```
npx prisma format
```

Seed database with initial data (currently there's no script to seed the database):

```
npx prisma db seed
```
