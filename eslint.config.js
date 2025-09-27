import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        __APP_VERSION__: 'readonly',
        global: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      jsdoc: jsdocPlugin,
    },
    rules: {
      // Custom rules for the project
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      // Custom rule: Require TSDoc comments for exported functions
      'jsdoc/require-description': 'error',
      // Custom rule: Enforce consistent naming for components
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'function',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'UPPER_CASE'],
          filter: {
            regex: '^(__.*__|_.*)$',
            match: false,
          },
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          filter: {
            regex: '^_.*$',
            match: false,
          },
        },
      ],
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**', '*.config.js'],
  },
]