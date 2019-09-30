/* eslint-env node */
module.exports = {
    extends: [ "plugin:@typescript-eslint/base" ],
    settings: {
        "import/extensions": [ ".js", ".ts" ],
        "import/resolver": { typescript: { alwaysTryTypes: true }}
    },
    rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/ban-types": "error",
        "camelcase": "off",
        "@typescript-eslint/camelcase": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-this-alias": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "no-var": "error",
        "no-dupe-class-members": "off",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",

        // Due to the nature of the interaction between JavaScript and TypeScript we believe
        // these are important to allow (otherwise weird stuff like 'x || 0' happens which we
        // find is less correct than simply 'x!')
        "@typescript-eslint/no-non-null-assertion": "off",

        "@typescript-eslint/array-type": "error",

        "@typescript-eslint/explicit-function-return-type": [ "error", { allowExpressions: true }],

        "@typescript-eslint/indent": "off",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-use-before-define": [ "error", { functions: false }]
    }
};
