import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */ // eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "next", "prettier"],
  }),
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      ...nextPlugin.plugins,
    },
    rules: {
      "import/order": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
