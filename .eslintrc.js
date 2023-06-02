module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "prettier",
    "prettier/vue",
    "prettier/@typescript-eslint",
  ],
  plugins: ["vue", "@typescript-eslint"],
  // add your custom rules here
  rules: {},
};