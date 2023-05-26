# T4SG Starter Project

- [T4SG Starter Project](#t4sg-starter-project)
  - [Introduction](#introduction)
  - [Setup](#setup)
  - [Stack references](#stack-references)
    - [Typescript](#typescript)
    - [Next.js](#nextjs)
    - [Supabase](#supabase)
    - [Prisma](#prisma)
    - [tRPC](#trpc)
  - [Development tools](#development-tools)
    - [Code formatting and linting tools](#code-formatting-and-linting-tools)
      - [`eslint`](#eslint)
      - [`prettier`](#prettier)
      - [EditorConfig](#editorconfig)
      - [`husky` and `lint-staged`](#husky-and-lint-staged)
      - [VSCode-specific settings](#vscode-specific-settings)
    - [VSCode Extensions](#vscode-extensions)
      - [`eslint`, `prettier`, `editorconfig`, and `prisma`](#eslint-prettier-editorconfig-and-prisma)
      - [BetterComments](#bettercomments)
      - [Live Share](#live-share)
  - [Deployment guides](#deployment-guides)
  - [T3 stack references](#t3-stack-references)

---

## Introduction

This project is a versatile starter project for T4SG web development projects. The stack and development tools have been chosen carefully to enable teams to develop rapidly on a variety of projects and build apps that are more easily maintainable by clients post-handoff.

The stack is based on the popular, industry-standard [T3 Stack](https://create.t3.gg/en/introduction) (bootstrapped with a tool called `create-t3-app`). The frontend is written in Typescript and uses Next.js, a React-based framework with significant optimizations. The backend uses Supabase, an open-source Firebase alternative. In between, we use Prisma and tRPC to fully carry typesafety from the backend to the frontend. These components synergize to produce a highly flexible webapp with full-stack typesafety.

---

## Setup

#### Clone repository

`cd` into a desired destination folder, then clone the repo (preferably using SSH):

```shell
git clone git@github.com:hcs-t4sg/starter-project-2023-core.git
```

#### Package installation

1. Open the project folder in VSCode. You can do so with the following terminal shortcut:

   ```bash
   # Navigate into the project directory
   cd starter-project-2023-core.git

   # Open in VSCode
   code .

   # If the second error gives you an error, you probably don't have the VS Code 'code' keyword added to your PATH variable. Follow this tutorial:
   # https://www.freecodecamp.org/news/how-to-open-visual-studio-code-from-your-terminal/#:~:text=Once%20your%20terminal%20is%20open,Then%20hit%20enter%20.&text=Once%20you%20hit%20enter%20%2C%20VS%20Code%20will%20now%20open.
   ```

2. You should see a popup in the bottom right prompting you to install recommended extensions. Please install these, they'll be helpful for code formatting and developing the webapp. You can also view the recommended extensions in the extensions sidebar (`cmd + shift + X`.) You will also get a prompt to use the workspace's Typescript version; accept it.

3. Open a terminal in the project folder by dragging up from the bottom of the code window or by going to `Terminal > New Terminal` in the menu bar.

4. Run: `npm install` (`npm i` for short)

   - If you get something like "command not found", you might not have `npm` installed.

- If successful you should see something like:
  ```bash
  added 414 packages, and audited 415 packages in 13s

  149 packages are looking for funding
  run `npm fund` for details

  found 0 vulnerabilities
  ```

#### Database Setup

1. Visit the Supabase website, create an account (or login if you already have one), and create a new project. You will be prompted to set a **Database Password; remember it**. Wait for your database provisioning and setup to finish.

2. Navigate to Project Settings (left sidebar) > Database (left sidebar) > Connection string > Nodejs. Copy the string provided, it should look something like this: `postgresql://postgres:[YOUR-PASSWORD]@db.abcdefghijklmnopqrst.supabase.co:5432/postgres`

3. Duplicate the `.env.example` file (into your root project directory) and rename to `.env`. Inside `.env`, set the `DATABASE_URL` to the connection string you copied earlier. Then replace `[YOUR-PASSWORD]` with your database password. The final result should look something like this:

   ```shell
   # Some other comments above
   DATABASE_URL="postgresql://postgres:ThisIsMyPassword123@db.abcdefghijklmnopqrst.supabase.co:5432/postgres"
   ```

4. Now that your Prisma client is connected to your Supabase database, you can test the connection by pushing your Prisma schema (found in `prisma/schema.prisma`) to Supabase. You can do that with the following terminal command:

   ```bash
   # Push Prisma schema to database
   npx prisma db push
   ```

   You should see an output like:

   ```bash
   Environment variables loaded from .env
   Prisma schema loaded from prisma/schema.prisma
   Datasource "db": PostgreSQL database "postgres", schema "public" at "db.abcdefghijklmnopqrst.supabase.co:5432"

   🚀  Your database is now in sync with your Prisma schema. Done in 2.10s

   ✔ Generated Prisma Client (4.14.1 | library) to ./node_modules/@prisma/client in 89ms
   ```

   If you check Supabase, you should be able to see the new schema in the database (an Example table with columns `id`, `createdAt`, and `updatedAt`).

#### Run the webapp

You can run the webapp with the following terminal command:

```bash
# Start the webapp in development mode (usually what you do in development). Exit with Ctrl + C
npm run dev
```

---

## Stack references

This section provides a short description and important commands related to each component of the stack. The T3 guides to each component are also linked, which should be helpful especially for understanding how the different components synchronize together and how some of the boilerplate code in the app works.

### Typescript

Typescript is a strongly-typed programming language based on Javascript. It integrates closely with your editor and provides type inference and static type checking to catch errors/bugs early-on and provide a great developer experience. Furthermore, it is a superset of Javascript and can be transpiled to any version of Javascript to run in browsers.

Typescript typechecking can be manually run with the following terminal command:

```bash
# Type check all typescript files (--noEmit disables generation of a report file, which is not needed)
npx tsc --noEmit
```

> **More references**
>
> - [T3 Guide to Typescript](https://create.t3.gg/en/usage/typescript)
> - [Official Typescript documentation](https://www.typescriptlang.org/)

### Next.js

Next.js is a React-based framework that offers significant optimizations with relatively small learning curve. Notably, it provides a powerful page routing system, ability to create built-in API routes without a separate backend, and a variety of options for fetching data and rendering content on the server.

To run the webapp in development mode, use the following terminal command:

```bash
# Start the webapp in development mode (usually what you do in development). Exit with Ctrl + C
npm run dev
```

To create and run a production build of the webapp (great for testing before deployment), use the following terminal command:

```bash
# Create a production build
npm run build

# Start the production build
npm start
```

> **More references**
>
> - [T3 Guide to Next.js](https://create.t3.gg/en/usage/next-js)
> - [Official Next.js documentation](https://nextjs.org)

### Supabase

The backend uses [Supabase](https://supabase.com), an open-source Firebase alternative. Supabase provides all of Firebase's most important functionality and more:

- **Database:** Built on Postgres, a relational database which has better structure than Firebase's Firestore NoSQL database and is open-source (thus more easily maintainable by clients).
- **Realtime subscriptions:** Analogous to Firestore's `onSnapshot` realtime listeners, allowing you to listen to realtime changes in data.
- **User authentication:** Like Firebase, a simple auth system with all social providers and user permissions for database access.
- **File storage:** Like Firebase, cloud storage for any kind of digital content.
- **Edge functions:** Server-side Typescript functions that run on Supabase without needing to set up a backend. Analogous to Firebase Cloud Functions, which are not available on the free tier!

> **More references**
>
> - [Official Supabase documentation](https://supabase.com/docs)

### Prisma

Prisma is an ORM ([object-relational mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)) for Typescript that allows you to manage your database schema in a `schema.prisma` file, then generate a type-safe client used in the backend to query our database (in this case, Supabase). With Prisma, we can ensure alignment between our codebase and database schema and manage our database from our codebase, all within the safety of Typescript.

**More important commands TBA.**

Prisma also provides Prisma Studio, a GUI for viewing and editing your database. You can launch it with the following terminal command:

```bash
# Launch Prisma Studio
npx prisma studio
```

> **More references**
>
> - [T3 guide to Prisma](https://create.t3.gg/en/usage/prisma)
>
> - [Official Prisma documentation](https://prisma.io)

### tRPC

tRPC allows to create typesafe API routes that are callable from the frontend with full typesafety and autocompletion. With tRPC, you write TypeScript functions on the backend (for instance, one querying our database through Prisma), and then call these functions from the frontend.

**More important commands TBA.**

> **More references**
>
> - [T3 guide to tRPC](https://create.t3.gg/en/usage/trpc)
> - [Official tRPC documentation](https://trpc.io)

### Environment variables

The T3 stack uses its own package to validate and provide typesafety to environment variables, so the process of adding an environment variable is slightly more involved than just updating `.env.local`. Instructions for managing environment variables are [here](https://create.t3.gg/en/usage/env-variables).

---

## Development tools

This section provides information on various tools this project uses to streamline the development process.

### Code formatting and linting tools

This starter project uses a [combination](https://stackoverflow.com/questions/48363647/editorconfig-vs-eslint-vs-prettier-is-it-worthwhile-to-use-them-all) of code formatting and linting tools to catch errors and enforce consistent code styling across all collaborators working on the project. Documentation and a quick description of each tool is given below. The configuration files for each tool have also been commented with additional information/references.

The preset configurations should work great out of the box, but feel free to customize them to your liking.

#### [`eslint`](https://eslint.org)

A [linting](<https://en.wikipedia.org/wiki/Lint_(software)>) tool that statically analyzes our code to detect and fix issues with code quality (like unused variables, residual console statements, etc). `eslint` is configured to run on save and before making a `git commit` (see below), but you can also run it manually with the following terminal commands:

```bash
# Easiest way to lint all files in the project.
npm run lint
```

```bash
# Lint a specific file (or all files by using "."). Add the --fix tag to have eslint correct errors that are automatically fixable.
npx eslint [filepath or .] --fix
```

If you need to exclude certain folders/files from the ESLint rules, you can create a `.eslintignore` file.

If you want to modify the `eslint` rules, you can edit the `rules` array in `.eslintrc.cjs`. If adding a new rule, make sure that it doesn't conflict with `prettier` by running the following command ([more info here](https://github.com/prettier/eslint-config-prettier#cli-helper-tool)):

```bash
# Test eslint-config-prettier against some file in the codebase, for example index.tsx. You usually only need to run this for one file
npx eslint-config-prettier src/index.tsx
```

Config file is in `.eslintrc.cjs`.

#### [`prettier`](https://prettier.io)

Formats outputted code to a consistent, opinionated style **after** it has been written. `prettier` is configured to run on save and before making a git commit (see below), but you can also run it manually with the following terminal commands:

```bash
# Check a specific file (or all files by using ".") for formatting errors and give a human-friendly summary of all errors.
npx prettier [filepath or .] --check

# Fix all formatting errors in-place for a specific file (or all files by using ".").
npx prettier [filepath or .] --write
```

Note that `prettier` and `eslint` have [overlapping functionalities](https://www.robinwieruch.de/prettier-eslint/), so to prevent conflict between the two we also add the following two packages:

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier#cli-helper-tool): Disables all `eslint` rules that would conflict with `prettier`
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier): Integrates `prettier` rules into `eslint` rules

Finally, our `prettier` configuration also includes a [plugin](https://github.com/trivago/prettier-plugin-sort-imports) for sorting import declarations.

If you need to exclude certain folders/files from the `prettier` formatting, you can create a `.prettierignore` file. The `prettier` config file is in `.prettierrc.cjs`.

#### [EditorConfig](https://editorconfig.org)

Standardizes some settings (only in the project workspace) across different editors (Sublime, VSCode, etc) to apply formatting rules **before** writing code (e.g. hitting `tab` leaves two spaces). Config file is in `.editorconfig`.

#### [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged)

`husky` sets a pre-commit hooks that runs typechecking (with `tsc`), `eslint`, and `prettier` checking on our code before making a `git commit`, to prevent us from committing code with poor quality or formatting. `lint-staged` saves time by setting typechecking, `eslint`, and `prettier` to run only on our staged files. This keeps from having to check the entire codebase for every commit. Husky settings are in `.husky/` folder. `lint-staged` config is in `.lintstagedrc.cjs`.

#### VSCode-specific settings

The project contains workspace-specific VSCode settings in `.vscode/settings.json`. These settings (which only apply when inside the project workspace) set the editor to:

- Format with `prettier` and lint with `eslint` on save
- Use `prettier` as the default formatter
- Prompt the user to use the codebase's version of Typescript for Intellisense (preventing errors arising from differing Typescript versions)

### VSCode Extensions

#### `eslint`, `prettier`, `editorconfig`, and `prisma`

These add in-editor support (syntax highlighting, error checking, etc.) for their respective tools. The recommended workspace extensions are configured in `.vscode/extensions.json`.

#### [BetterComments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

Allows you to categorize your comments into color-coded Alerts, Queries, TODOs, and Highlights for more human-friendly annotations.

#### [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Enables you to collaboratively edit and debug with others in real time. Think Google Docs functionality but for your codebase.

---

## Deployment guides

The T3 stack documentation provides deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker).

---

## T3 stack references

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/): Tips for all stack components and great suggestions for additional tools to add (user auth packages, component libraries, state management libraries, etc)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available): Tutorials
- [Discord](https://t3.gg/discord) community where you can ask for help
