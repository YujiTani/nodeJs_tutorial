import eslint from "@eslint/js";
import { defineConfig } from "eslint-define-config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.js"],
    ...eslint.configs.recommended,
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
        exports: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      quotes: ["error", "single"],
    },
  },
  eslintConfigPrettier,
]);
