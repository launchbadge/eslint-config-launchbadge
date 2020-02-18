/* eslint-env node */
module.exports = {
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
        {
            files: [ "*.ts", "*.tsx" ],
            parserOptions: { project: "./tsconfig.json" },
            extends: [ "plugin:@typescript-eslint/recommended-requiring-type-checking" ],
            rules: {
                // Requires Promise-like values to be handled appropriately
                "@typescript-eslint/no-floating-promises": [ "error", { ignoreVoid: true }],

                // Warns when a namespace qualifier is unnecessary
                "@typescript-eslint/no-unnecessary-qualifier": "error",

                // Warns if an explicitly specified type argument is the default for that type parameter
                "@typescript-eslint/no-unnecessary-type-arguments": "error",

                // Enforce giving compare argument to Array#sort
                "@typescript-eslint/require-array-sort-compare": "error",

                // When adding two variables, operands must both be of type number or of type string.
                "@typescript-eslint/restrict-plus-operands": "error",

                // Boolean expressions are limited to booleans
                "@typescript-eslint/strict-boolean-expressions": "error"
            }
        }
    ],
    settings: {
        "import/extensions": [ ".js", ".ts" ],
        "import/resolver": { typescript: { alwaysTryTypes: true }}
    },
    rules: {
        // Enforce T[] (for simple types) or Array<T | U | V[]> (for complex types)
        "@typescript-eslint/array-type": [ "error", { default: "array-simple" }],

        // Enforce consistent brace style for blocks
        "brace-style": "off",
        "@typescript-eslint/brace-style": [ "error", "1tbs" ],

        // Enforce using interface for object type definitions
        "@typescript-eslint/consistent-type-definitions": [ "error", "interface" ],

        // Require explicit accessibility modifiers
        "@typescript-eslint/explicit-member-accessibility": "error",

        // Disallow spacing between function identifiers
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": [ "error", "never" ],

        // Enforce consistent indentation
        "indent": "off",
        "@typescript-eslint/indent": [ "error", 4, { SwitchCase: 1 }],

        // Enforces naming conventions for class members (by visibility)
        "@typescript-eslint/member-naming": [
            "error", {
                // Private and protected members must start with _
                private: "^_",
                protected: "^_",
                // Public members must *not* start with _
                public: "^[^_]"
            }
        ],

        // Require a consistent member declaration order
        "@typescript-eslint/member-ordering": "error",

        // Disallow unnecessary parentheses
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": [ "error", "all", { "ignoreJSX": "all" }],

        // Forbids the use of classes as namespaces
        "@typescript-eslint/no-extraneous-class": "error",

        // Disallows invocation of require()
        "@typescript-eslint/no-require-imports": "error",

        // Disallow unnecessary constructors
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",

        // Use for-of loops instead of standard for loops
        "@typescript-eslint/prefer-for-of": "error",

        // Use function types instead of interfaces with call signatures
        "@typescript-eslint/prefer-function-type": "error",

        // Enforce the consistent use of quotes
        "quotes": "off",
        "@typescript-eslint/quotes": [ "error", "double" ],

        // Enforces consistent use of semicolons
        "semi": "off",
        "@typescript-eslint/semi": [ "error", "always" ],

        // Warns for any two overloads that could be unified into one
        "@typescript-eslint/unified-signatures": "error",

        // Allow functions and classes to be used before being defined
        "@typescript-eslint/no-use-before-define": [ "error", { functions: false, classes: false }],

        // Due to the nature of the interaction between JavaScript and TypeScript we believe
        // these are important to allow (otherwise weird stuff like 'x || 0' happens which we
        // find is less correct than simply 'x!')
        "@typescript-eslint/no-non-null-assertion": "off",

        "@typescript-eslint/explicit-function-return-type": [ "error", { allowTypedFunctionExpressions: true }]
    }
};
