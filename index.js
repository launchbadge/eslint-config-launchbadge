module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    // ESLint – Recommended (marked with a checkmark)
    // http://eslint.org/docs/rules/
    "eslint:recommended"
  ],
  rules: {
    // ESLint – Possible Errors
    // http://eslint.org/docs/rules/#possible-errors

    "for-direction": "error",
    "getter-return": "error",
    "no-await-in-loop": "warn",
    "no-extra-parens": [
      "error",
      "all",
      {
        returnAssign: false,
        conditionalAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: "all"
      }
    ],
    "no-template-curly-in-string": "error",
    "valid-jsdoc": "error",

    // ESLint – Best Practices
    // http://eslint.org/docs/rules/#best-practices

    "array-callback-return": "error",
    complexity: ["warn", 15],
    "consistent-return": "error",
    curly: ["error", "multi", "consistent"],
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
    eqeqeq: ["error", "always", { null: "never" }],
    "guard-for-in": "error",
    "no-alert": "warn",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "warn",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "warn",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "warn",
      {
        detectObjects: true,
        ignore: Array(11)
          .fill()
          .map((value, index) => index)
          .concat(Array(10).fill().map((value, index) => -(index + 1))),
        ignoreArrayIndexes: true,
        enforceConst: true
      }
    ],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
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
    "no-unused-expressions": "warn",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": [
      "warn",
      {
        terms: ["todo", "fixme", "bug", "hack", "godzilla", "here be dragons"],
        location: "start"
      }
    ],
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    radix: ["error", "as-needed"],
    "require-await": "warn",
    yoda: ["error", "never"],
    "wrap-iife": [
      "error",
      "inside",
      {
        functionPrototypeMethods: true
      }
    ],

    // ESLint – Strict Mode
    // http://eslint.org/docs/rules/#strict-mode

    strict: "error",

    // ESLint – Variables
    // http://eslint.org/docs/rules/#variables

    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-use-before-define": [
      "error",
      {
        functions: false
      }
    ],
    "no-unused-vars": "warn",

    // ESLint – CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs

    "callback-return": ["error", ["done", "callback", "cb", "next"]],
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "warn",
    "no-process-exit": "warn",
    "no-sync": "warn",

    // ESLint – Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues

    "array-bracket-newline": ["error", { multiline: true }],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": [
      "error",
      {
        multiline: true
      }
    ],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs"],
    camelcase: ["error"],
    "capitalized-comments": [
      "error",
      "always",
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true
      }
    ],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["error", "self"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "error",
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "id-length": [
      "error",
      { min: 2, exceptions: ["x", "y", "i", "j", "$", "_"] }
    ],
    indent: [
      "error",
      "tab",
      {
        SwitchCase: 1
      }
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict"
      }
    ],
    "keyword-spacing": ["error", { before: true, after: true }],
    "line-comment-position": ["error", "above"],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        ignorePattern: "(@flow)"
      }
    ],
    "max-depth": ["warn", { max: 4 }],
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        comments: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    "max-lines": ["warn", 600],
    "max-nested-callbacks": ["warn", { max: 8 }],
    "max-params": ["warn", { max: 6 }],
    "max-statements": ["warn", { max: 30 }],
    "max-statements-per-line": ["error", { max: 2 }],
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1, maxBOF: 1 }],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true
      }
    ],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        minProperties: 3,
        consistent: true
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      { allowMultiplePropertiesPerLine: true }
    ],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } }
    ],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "consistent"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "never"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": ["error", "last"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "spaced-comment": [
      "error",
      "always",
      {
        line: { markers: ["*package", "!", "/", ","] },
        block: {
          balanced: true,
          markers: ["*package", "!", ",", ":", "::", "flow-include"],
          exceptions: ["*"]
        }
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": "error",
    "wrap-regex": "error",

    // ESLint – ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6

    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "generator-star-spacing": ["error", { before: true, after: true }],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": [2, "always"],
    "prefer-arrow-callback": [
      2,
      { allowNamedFunctions: false, allowUnboundThis: true }
    ],
    "prefer-const": [2, { destructuring: "any", ignoreReadBeforeAssign: true }],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "both"]
  }
};
