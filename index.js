/* eslint-env node */
module.exports = {
    extends: [ "eslint:recommended", "plugin:import/errors", "plugin:unicorn/recommended" ],
    settings: { "import/resolver": { webpack: {}}},
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        //
        // Possible Errors
        // https://eslint.org/docs/rules/#possible-errors
        //

        "no-await-in-loop": "warn",
        "no-import-assign": "error",
        "no-template-curly-in-string": "error",

        //
        // Best Practices
        // https://eslint.org/docs/rules/#best-practices
        //

        "array-callback-return": "error",
        "consistent-return": "error",
        "curly": [ "error", "multi-line", "consistent" ],
        "default-case": "error",
        "default-param-last": "error",
        "dot-location": [ "error", "property" ],
        "dot-notation": [ "error", { allowKeywords: false, allowPattern: "^[a-z]+(_[a-z]+)+$" }],
        "eqeqeq": [ "error", "smart" ],
        "guard-for-in": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-implicit-coercion": "error",
        "no-floating-decimal": "error",
        "no-extra-label": "error",
        "no-extra-bind": "error",
        "no-extend-native": "error",
        "no-eval": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "radix": [ "error", "always" ],
        "require-await": "error",
        "require-unicode-regexp": "error",
        "wrap-iife": "error",
        "yoda": [ "error", "never" ],

        //
        // Variables
        // https://eslint.org/docs/rules/#variables
        //

        "no-label-var": "error",
        "no-undef-init": "error",
        "no-undefined": "error",

        //
        // Node.js and CommonJS
        // https://eslint.org/docs/rules/#nodejs-and-commonjs
        //

        "callback-return": "error",
        "handle-callback-err": "error",
        "no-buffer-constructor": "error",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "warn",
        "no-process-exit": "error",
        "no-sync": [ "error", { allowAtRootLevel: true }],

        //
        // Stylistic Issues
        // https://eslint.org/docs/rules/#stylistic-issues
        //

        "array-bracket-newline": [ "error", { multiline: true }],
        "array-bracket-spacing": [ "error", "always", { objectsInArrays: false, arraysInArrays: false }],
        "array-element-newline": [ "error", "consistent" ],
        "block-spacing": [ "error", "always" ],
        "brace-style": [ "error", "1tbs", { allowSingleLine: false }],
        "camelcase": [ "error" ],
        "comma-dangle": [ "error", "never" ],
        "comma-spacing": [ "error", { before: false, after: true }],
        "comma-style": [ "error", "last" ],
        "consistent-this": [ "error", "this_" ],
        "computed-property-spacing": [ "error", "always", { enforceForClassMembers: true }],
        "eol-last": [ "error", "always" ],
        "func-call-spacing": [ "error", "never" ],
        "func-name-matching": [ "error", "always" ],
        "function-call-argument-newline": [ "error", "consistent" ],
        "function-paren-newline": [ "error", "multiline" ],
        "implicit-arrow-linebreak": [ "error", "beside" ],
        "indent": [ "error", 4, { SwitchCase: 1 }],
        "key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
                mode: "strict"
            }
        ],
        "keyword-spacing": [ "error", { before: true, after: true }],
        "linebreak-style": [ "error", "unix" ],
        "lines-between-class-members": [ "error", "always", { exceptAfterSingleLine: true }],
        "max-len": [
            "error", {
                code: 100,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true
            }
        ],
        "multiline-comment-style": [ "error", "separate-lines" ],
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": [ "error", { ignoreChainWithDepth: 3 }],
        "no-array-constructor": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": [ "error", { max: 1 }],
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": [ "error", { multiline: true }],
        "object-curly-spacing": [ "error", "always", { arraysInObjects: false, objectsInObjects: false }],
        "operator-assignment": [ "error", "always" ],
        "operator-linebreak": [ "error", "after" ],
        "padded-blocks": [ "error", "never" ],
        "prefer-object-spread": "error",
        "quote-props": [ "error", "consistent-as-needed" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "semi-spacing": [ "error", { before: false, after: true }],
        "semi-style": [ "error", "last" ],
        "space-before-blocks": [ "error", "always" ],
        "space-before-function-paren": [ "error", "never" ],
        "space-in-parens": [ "error", "never" ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": [ "error", "always" ],
        "switch-colon-spacing": [ "error", { after: true, before: false }],
        "template-tag-spacing": [ "error", "never" ],
        "unicode-bom": [ "error", "never" ],

        //
        // ECMAScript 6
        // https://eslint.org/docs/rules/#ecmascript-6
        //

        "arrow-body-style": [ "error", "as-needed" ],
        "arrow-parens": [ "error", "always" ],
        "arrow-spacing": [ "error", { before: true, after: true }],
        "generator-star-spacing": [ "error", { before: true, after: false }],
        "no-duplicate-imports": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": [ "error", "always", { avoidExplicitReturnArrows: true }],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-template": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "rest-spread-spacing": [ "error", "never" ],
        "symbol-description": "error",
        "template-curly-spacing": [ "error", "never" ],
        "yield-star-spacing": [ "error", { before: true, after: false }],

        //
        // Unicorn
        // https://github.com/sindresorhus/eslint-plugin-unicorn#rules
        //

        "unicorn/expiring-todo-comments": [
            "error",
            { ignoreDatesOnPullRequests: false }
        ],
        "unicorn/filename-case": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/custom-error-definition": "error",
        "unicorn/no-unsafe-regex": "error"
    }
};
