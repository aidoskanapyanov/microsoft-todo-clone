# Microsoft To-Do clone

This repository contains a Microsoft To-Do clone application, consisting of a backend and a frontend. The backend is responsible for handling the server-side logic, while the frontend provides the user interface for interacting with the application.

## Monorepo

This project is organized as a monorepo, which means that both the backend and frontend codebases are kept together in the same repository. This approach offers several advantages, such as easier code sharing, unified versioning, and simplified development workflows. It allows for better coordination and integration between the backend and frontend teams, making it more convenient to manage and deploy the application as a whole.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- pnpm (a package manager, similar to npm and yarn)

## Backend

### Description

The backend is built using Node.js and Express.js, with a TypeScript setup for type safety. It utilizes Prisma as the ORM (Object-Relational Mapping) tool to interact with the database. The application also employs various packages for authentication, validation, and logging.

### Scripts

- `db:generate`: Generates Prisma client based on the database schema.
- `db:push`: Pushes the database changes to the database while skipping client regeneration.
- `db:studio`: Opens Prisma Studio, an interactive GUI to manage the database.
- `dev`: Runs the backend server in development mode with automatic restarts using ts-node-dev.

## Frontend

### Description

The frontend is a React application created with Vite for faster development and building. It uses TypeScript for better type support and incorporates various packages for styling and routing.

### Scripts

- `dev`: Runs the frontend development server with Vite, allowing hot module replacement.
- `build`: Transpiles and builds the frontend for production use.
- `generate:component`: Generates a new React component using Turbo.
- `lint`: Lints the TypeScript files in the src directory using ESLint.
- `preview`: Previews the built application locally.

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
