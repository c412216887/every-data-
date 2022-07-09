const {resolve} = require("path")
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', "standard-with-typescript", "prettier"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: resolve(__dirname, 'tsconfig.json')
  },
  plugins: ['@typescript-eslint', "prettier"],
  rules: {
    "semi": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-use-before-define": 0,
    "space-before-function-paren": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "prettier/prettier": [2, { endOfLine: "auto" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/method-signature-style": [2, "method"],
    "@typescript-eslint/semi": 0
  }
};
