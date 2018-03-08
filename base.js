module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'eslint-config-prettier',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    semi: [2, 'never'],
    'arrow-body-style': 0,
    'no-unused-expressions': [2, { allowTaggedTemplates: true }],
    'dot-notation': 0,
    'object-curly-newline': 0,
    'no-nested-ternary': 0,

    'import/prefer-default-export': 0,
  },
}
