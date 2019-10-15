/* eslint-env node */
module.exports = {
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parserOptions: {
        project: "./tsconfig.json"
    },
    settings: {
        "import/extensions": [ ".js", ".ts" ],
        "import/resolver": { typescript: { alwaysTryTypes: true }}
    },
    rules: {
        // Due to the nature of the interaction between JavaScript and TypeScript we believe
        // these are important to allow (otherwise weird stuff like 'x || 0' happens which we
        // find is less correct than simply 'x!')
        "@typescript-eslint/no-non-null-assertion": "off"
    }
};
