import pluginReact from 'eslint-plugin-react';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  {
    plugins: {
      react: pluginReact
    },
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {      ...pluginReact.configs.recommended.rules
    }
  }
];
