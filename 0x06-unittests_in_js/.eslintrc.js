module.exports = {
    env: {
      browser: true,
      es2021: true,
      mocha: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'no-console': 'off',
      // Add more rules as needed
    },
  };
  