// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [ // https://eslint.org/docs/latest/use/configure/configuration-files
    // It is possible to override settings based on file glob patterns in your configuration by using the overrides key. 
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking", // Ruleset here: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"], // an array of strings where each additional configuration extends the preceding configurations
  // prettier/@typescript-eslint extension is no longer needed. https://stackoverflow.com/questions/65675771/eslint-couldnt-find-the-config-prettier-typescript-eslint-after-relocating
  rules: {
    "@typescript-eslint/consistent-type-imports": [ // https://typescript-eslint.io/rules/consistent-type-imports/
      "error", // https://eslint.org/docs/latest/use/configure/rules
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // https://typescript-eslint.io/rules/no-unused-vars/
    "prettier/prettier": "error" // https://www.robinwieruch.de/prettier-eslint/
  },
};

module.exports = config;
