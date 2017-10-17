module.exports = {
  plugins: ['flowtype'],
  extends: [
    // Recommended
    // https://github.com/gajus/eslint-plugin-flowtype/blob/master/src/configs/recommended.json
    'plugin:flowtype/recommended',
  ],
  rules: {
    'flowtype/semi': ['error', 'never'],
  },
}
