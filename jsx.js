/* eslint-env node */
module.exports = {
    plugins: [ "react" ],
    rules: {
        "@typescript-eslint/indent": "off",
        "react/jsx-boolean-value": [ "error", "never"],
        "react/jsx-child-element-spacing":"error",
        "react/jsx-closing-bracket-location": ["error", {
            "nonEmpty": "line-aligned",
            "selfClosing": "line-aligned"
        }],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-curly-newline": ["error", "consistent"],
        "react/jsx-curly-spacing": ["error", {"when": "always", "spacing": {
            "objectLiterals": "never",
            "children": true
        }}],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": ["warn", { "extensions": [ ".tsx" ]}],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-handler-names": "error" ,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-key": "error",
        "react/jsx-max-depth": ["warn", { "max": 4 }],
        "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "multiline" }],
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
        "react/jsx-fragments": ["error", "element"],
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-props-no-spreading": "error",
        "react/jsx-tag-spacing": "error",
        "react/jsx-wrap-multilines": "error"
    }
};
