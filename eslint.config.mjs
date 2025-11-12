import { globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const baseConfig = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
];

export default tseslint.config([
  baseConfig,
  globalIgnores([
    'node_modules/**/*',
  ]),
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tseslint.parser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'no-restricted-syntax': "off",
      'react/jsx-filename-extension': "off",
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
    ],

    rules: {
      'consistent-return': 'off',
      'react/prop-types': "off",
    },
  }
]);
