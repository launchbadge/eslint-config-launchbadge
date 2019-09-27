/* eslint-env node */
module.exports = {
    extends: [ "@vue/typescript", "./typescript.js" ],
    parser: require.resolve("vue-eslint-parser"),
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false
    },
    rules: {}
};
