/** @type {import('lint-staged').Config} */

const config = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // Lint & Prettify TS and JS files
  // No need to run through 'next lint': https://github.com/vercel/next.js/discussions/26564
  "**/*.(ts|tsx|js)": (filenames) => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],

  // Prettify only Markdown and JSON files
  "**/*.(md|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`,
};

module.exports = config;
