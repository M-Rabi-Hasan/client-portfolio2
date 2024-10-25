// eslint.config.js

import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginNext from 'eslint-plugin-next'; // Make sure this is imported

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
    parser: '@babel/eslint-parser', // or any other parser you are using
    plugins: {
      react: pluginReact,
      next: pluginNext, // Ensure this is included
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      'react/prop-types': 'off',
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
