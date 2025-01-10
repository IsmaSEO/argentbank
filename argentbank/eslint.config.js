import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
    ignores: ['node_modules/', 'dist/', 'build/', '*.min.js'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.recommended,
  pluginPrettier.configs.recommended,
];
