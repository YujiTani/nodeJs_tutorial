import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        exports: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      quotes: ['error', 'single'],
    },
  },
]);