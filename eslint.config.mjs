import { FlatCompat } from "@eslint/eslintrc";
import gm from "@gm-dev/eslint-config/next-tailwind";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...gm,
  ...compat.config({
    root: true,
    extends: ["next/core-web-vitals"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
    overrides: [
      {
        files: ["**/*.md", "**/*.mdx"],
        extends: ["plugin:mdx/recommended"],
        parser: "eslint-mdx",
        rules: {
          "@typescript-eslint/naming-convention": "off",
          "@next/next/no-img-element": "off",
          "prettier/prettier": ["error", { parser: "mdx" }],
        },
      },
    ],
  }),
];

export default config;
