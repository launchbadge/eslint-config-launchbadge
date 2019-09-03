/* eslint-env node */
module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  settings: {
    "import/extensions": [".js", ".ts"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/camelcase": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true }
    ],
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/interface-name-prefix": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/type-annotation-spacing": "error"
  }
};
