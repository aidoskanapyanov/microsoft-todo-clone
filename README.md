# Microsoft To-Do clone

An open source application built using 

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env` and update the variables if needed:

```sh
cp .env.example .env
```

3. Spin up a local database using Docker, and wait until it's ready (this may take a minute):

```sh
docker-compose -f docker-compose-dev.yaml up -d
```

4. Push the Prisma schema to your database:

```sh
pnpm db:push
```

5. Start the development server:

```sh
pnpm dev
```
