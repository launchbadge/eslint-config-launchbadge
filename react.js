module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  extends: [
    // Recommended
    // https://github.com/yannickcr/eslint-plugin-react#recommended
    "plugin:react/recommended"
  ],
  rules: {}
}
