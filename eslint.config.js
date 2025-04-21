import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  // Ignore patterns
  {
    ignores: ['dist', 'build', 'node_modules'],
  },
  // Main configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Include TypeScript for flexibility
    languageOptions: {
      ecmaVersion: 'latest', // Use 'latest' for modern JS features
      sourceType: 'module',
      globals: {
        ...globals.browser, // Browser globals (e.g., window, document)
        ...globals.node, // Node.js globals (e.g., process, module)
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier, // Add Prettier plugin
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      // Combine recommended rules from ESLint, React, and React Hooks
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettier.rules, // Disable ESLint formatting rules that conflict with Prettier
      'prettier/prettier': 'error', // Treat Prettier issues as ESLint errors
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Refine no-unused-vars to avoid overly permissive patterns
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          // Allow React components (uppercase) but avoid overly broad patterns
          varsIgnorePattern: '^_[A-Z]', // Ignore variables like _Component
        },
      ],
    },
  },
];
