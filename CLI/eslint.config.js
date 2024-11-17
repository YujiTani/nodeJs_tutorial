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
      semi: ["error", "never"], // セミコロンを必須に
      "no-unused-vars": ["error"], // 未使用の変数をエラーとして検出
      "no-undef": ["error"], // 未定義の変数をエラーとして検出
      "no-console": ["warn"], // console.log の使用を警告
      eqeqeq: ["error", "always"], // 厳密な等価演算子を強制
      "no-var": ["error"], // var の使用を禁止
      "prefer-const": ["error"], // 再代入されない変数に const を推奨
      "no-magic-numbers": ["warn", { ignore: [0, 1] }], // マジックナンバーの使用を警告
      camelcase: ["error", { properties: "always" }], // キャメルケースを強制
    },
  },
  eslintConfigPrettier,
]);
