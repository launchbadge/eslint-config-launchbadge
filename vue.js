/* eslint-env node */
module.exports = {
  extends: [
    "plugin:vue/recommended",
    "@vue/prettier",
    "./index.js",
    "./browser.js"
  ],
  rules: {
    "vue/array-bracket-spacing": "error",
    "vue/arrow-spacing": "error",
    "vue/block-spacing": "error",
    "vue/brace-style": "error",
    "vue/camelcase": "error",
    "vue/comma-dangle": "error",
    "vue/component-name-in-template-casing": "error",
    "vue/eqeqeq": ["error", "smart"],
    "vue/key-spacing": "error",
    "vue/match-component-file-name": "error",
    "vue/no-boolean-default": "error",
    "vue/object-curly-spacing": ["error", "always"],
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": "error",
    "vue/v-on-function-call": "error"
  }
};
