import { FlatCompat } from "@eslint/eslintrc";
import gm from "@gm-dev/eslint-config/next-tailwind";
import * as mdx from "eslint-plugin-mdx";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...gm,
  {
    ...mdx.flat,
  },
  {
    ...mdx.flatCodeBlocks,
    files: [mdx.flatCodeBlocks.files],
    rules: {
      ...mdx.flatCodeBlocks.rules,
    },
  },
  ...compat.config({
    root: true,
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  }),
];

export default config;
