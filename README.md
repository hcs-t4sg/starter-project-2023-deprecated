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

# T4SG Starter Project

## Introduction

This project is a versatile starter project for T4SG web development projects. The stack and development tools have been chosen carefully to enable teams to develop rapidly on a variety of projects and build apps that are more easily maintainable by clients post-handoff.

The stack is based on the popular, industry-standard [T3 Stack](https://create.t3.gg/en/introduction) (bootstrapped with a tool called `create-t3-app`). The frontend is written in Typescript and uses Next.js, a React-based framework that offers significant optimizations with relatively small learning curve. The backend uses Supabase, an open-source Firebase alternative which provides a Postgres database, user authentication, file storage, edge functions, and realtime subscriptions. In between, we use Prisma, an ORM (object-relational mapping) for Typescript that provides a typesafe client and schema to interact with Supabase. Finally, we use tRPC to create typesafe API routes to query the Prisma schema from our frontend. These components synergize to produce a highly flexible webapp with full-stack typesafety.

## Setup

---

## Stack references

### Typescript

[Typescript](https://create.t3.gg/en/usage/typescript)

Typescript typechecking can be manually run with the following terminal command:

```bash
# Type check all typescript files (--noEmit disables generation of a report file, which is not needed)
npx tsc --noEmit
```

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

A [linting](<https://en.wikipedia.org/wiki/Lint_(software)>) tool that statically analyzes our code to detect and fix issues with code quality (like unused variables, residual console statements, etc). `eslint` is configured to run on save and before making a `git commit` (see below), but you can also run it manually with the following terminal commands:

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

## T3 stack references

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/): Tips for all stack components and great suggestions for additional tools to add (user auth packages, component libraries, state management libraries, etc)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available): Tutorials
- [Discord](https://t3.gg/discord) community where you can ask for help
