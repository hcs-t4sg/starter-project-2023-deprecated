/** @type {import('prettier').Config} */
const config = {
  arrowParens: "always",
  printWidth: 120,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  // Documentation for the following 2: https://github.com/trivago/prettier-plugin-sort-imports
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};

module.exports = config;