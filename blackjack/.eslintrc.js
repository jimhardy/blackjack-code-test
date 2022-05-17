/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  settings: {
    jest: {
      version: 27,
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y"],
  rules: {
    indent: 0,
    "valid-jsdoc": "error",
    "no-prototype-builtins": 0,
    "no-warning-comments": "warn",
    "no-var": "error",
    "no-unused-vars": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": 0,
    "no-import-assign": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref"],
      },
    ],
  },
  ignorePatterns: ["server/index.js", "build/index.js"],
};
