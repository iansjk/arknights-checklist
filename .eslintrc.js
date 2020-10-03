module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json', './scripts/tsconfig.json']
  },
  rules: {
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '^_',
      },
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    'react/require-default-props': [
      'error',
      {
        ignoreFunctionalComponents: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-restricted-syntax': [ 
      'error', 
      { 
        selector: 'ForInStatement', 
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.', 
      }, 
      { 
        selector: 'LabeledStatement', 
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.', 
      }, 
      { 
        selector: 'WithStatement', 
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.', 
      }, 
    ], 
  },
};
