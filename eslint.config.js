export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      semi: ["warn", "always"],
      quotes: ["warn", "double"],
    },
  },
];
