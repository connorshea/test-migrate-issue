import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const baseConfig = [
  js.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    rules: {
      'consistent-return': 'off',
      'dot-notation': 'off',
      eqeqeq: "off",
      'no-console': "off",
      'no-empty': "off",
      'no-restricted-properties': "off",
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      "no-undef": "off",
    },
  },
];

export default tseslint.config([
  baseConfig,
  globalIgnores([
    'build/**/*',
    'coverage/**/*',
    'db/**/*',
    'lib/**/*',
    'log/**/*',
    'node_modules/**/*',
    'public/**/*',
    '!public/embed.js',
    'spec/**/*',
    'tmp/**/*',
    'vendor/**/*',
    'streaming/**/*',
    '.bundle/**/*',
    'storybook-static/**/*',
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
