/** @type {import('prettier').Config} */
const config = {
  arrowParens: "always",
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
};

/* The following Prettier config options are handled by .editorconfig and not this file:
"endOfLine"
"useTabs"
"tabWidth"
"printWidth"

https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/
*/

module.exports = config;
