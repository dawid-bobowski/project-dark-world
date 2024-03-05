# Project Dark World

## Known Issues

- none

If you find any, feel free to open a new issue.

## Next Steps

- character page;
- stats;
- equipment;
- inventory;
- create different game modes:
  - expeditions, timed missions that give rewards after a period of time;
  - dungeons, gather a party of 4 heroes and venture into the dungeon to face its threats together in an automatically simulated fights with monsters;
  - raids, together with 15 other players join your forces and slay a giant demon for some big rewards;
  - weekly events, come up with some weekly events;
- progression system;
- guilds;
- rankings;
- achievements;

To implement dungeons and raids, the app would require a separate server that would handle web sockets. This way client would be able to connect to it and receive real-time updates.

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
