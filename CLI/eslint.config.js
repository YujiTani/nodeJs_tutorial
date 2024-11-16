import eslint from "@eslint/js";
import { defineConfig } from "eslint-define-config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.js"],
    ...eslint.configs.recommended,
  },
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        exports: "readonly",
        module: "readonly",
      },
    },
    rules: {
      quotes: ["error", "single"],
    },
  },
  eslintConfigPrettier,
]);
