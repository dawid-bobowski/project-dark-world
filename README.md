# Project Dark World

### Known Issues

- all Google accounts are able to sign up even though there are only a few restricted in the Google OAuth 2.0;
- contexts seem to not work properly, some pages aren't able to access CharacterContext:
  - **TO DO**: investigate usage of Context API with Next.js.

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
