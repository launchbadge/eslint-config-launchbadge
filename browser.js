/* eslint-env node */
module.exports = {
  extends: ["plugin:compat/recommended"],
  settings: {
    "import/resolver": {
      webpack: {}
    }
  },
  plugins: ["@lwc/eslint-plugin-lwc"],
  rules: {
    // Disable access to document queries
    "@lwc/lwc/no-document-query": "error",

    // Lint the browser compatibility of your code
    // https://www.npmjs.com/package/eslint-plugin-compat
    "compat/compat": "error"
  }
};
