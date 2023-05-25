# T4SG Starter Project

## Introduction

This project is a versatile starter project for T4SG web development projects. The stack and development tools have been chosen carefully to enable teams to develop rapidly on a variety of projects and build apps that are more easily maintainable by clients post-handoff.

The stack is based on the popular, industry-standard [T3 Stack](https://create.t3.gg/en/introduction) (bootstrapped with a tool called `create-t3-app`). The frontend is written in Typescript and uses Next.js, a React-based framework that offers significant optimizations with relatively small learning curve. The backend uses Supabase, an open-source Firebase alternative which provides a Postgres database, user authentication, file storage, edge functions, and realtime subscriptions. In between, we use Prisma, an ORM (object-relational mapping) for Typescript that provides a typesafe client and schema to interact with Supabase. Finally, we use tRPC to create typesafe API routes to query the Prisma schema from our frontend. These components synergize to produce a highly flexible webapp with full-stack typesafety.

## Setup

---

## Stack references

### Typescript

[Typescript](https://create.t3.gg/en/usage/typescript)

### Next.js

[Next.js](https://nextjs.org)

### Supabase

[Supabase documentation](https://supabase.com/docs)

### Prisma

[Prisma](https://prisma.io)

### tRPC

[tRPC](https://trpc.io)

---

## Development tools

### Code formatting and linting tools

This starter project uses a [combination](https://stackoverflow.com/questions/48363647/editorconfig-vs-eslint-vs-prettier-is-it-worthwhile-to-use-them-all) of code formatting and linting tools to catch errors and enforce consistent code styling across all collaborators working on the project. Documentation and a quick description of each tool is given below. The configuration files for each tool have also been commented with additional information/references.

The preset configurations should work great out of the box, but feel free to customize them to your liking.

#### [`eslint`](https://eslint.org)

Statically analyzes our code to detect problems (like unused variables, residual console statements, )

#### [`prettier`](https://prettier.io)

#### [EditorConfig](https://editorconfig.org)

#### [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged)

### VSCode Extensions

#### `eslint`, `prettier`, `editorconfig`, and `prisma`

These add in-editor support (syntax highlighting, error checking, etc.) for their respective tools.

#### [BetterComments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

Allows you to categorize your comments into color-coded Alerts, Queries, TODOs, and Highlights for more human-friendly annotations.

#### [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Enables you to collaboratively edit and debug with others in real time. Think Google Docs functionality but for your codebase.

---

## Deployment guides

The T3 stack documentation provides deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker).

## T3 stack references

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/): Tips for all stack components and great suggestions for additional tools to add (user auth packages, component libraries, state management libraries, etc)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available): Tutorials
- [Discord](https://t3.gg/discord) community where you can ask for help
