module.exports = {
  "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2020
  },
  extends: ["turbo", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: [
        "@typescript-eslint",
        "prettier"
    ],
  rules: {
    "react/jsx-key": "off",
  },
};
