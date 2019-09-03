/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:unicorn/recommended"
  ],
  settings: {
    "import/resolver": {
      webpack: {}
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // Managed through prettier
    indent: "off",

    // Broken in eslint@6.x
    // See https://github.com/benmosher/eslint-plugin-import/issues/1341
    "import/named": "off",

    // Require Object Literal Shorthand Syntax
    // https://eslint.org/docs/rules/object-shorthand
    "object-shorthand": ["error", "always"],

    // This often has false positives for async/await style
    "require-atomic-updates": "off",

    // Unicorn
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": "off",

    // Unused variables should not be an error
    "no-unused-vars": "warn",

    // TODO: Categorize
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error"
  }
};
