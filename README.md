# Project Dark World

### Known Issues

- none

If you find any, feel free to open a new issue.

### Initial Project Setup

```
npm i
npm i -g vercel
vercelnpx prisma generate
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
