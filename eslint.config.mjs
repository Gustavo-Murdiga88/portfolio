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
    }
  }),
];

export default config;
