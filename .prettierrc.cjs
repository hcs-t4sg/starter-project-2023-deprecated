/** @type {import('prettier').Config} */
const config = {
  arrowParens: "always",
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  // Documentation for the following 2: https://github.com/trivago/prettier-plugin-sort-imports
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

/* The following Prettier config options are handled by .editorconfig and not this file:
"endOfLine"
"useTabs"
"tabWidth"
"printWidth"

https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/
*/

module.exports = config;
