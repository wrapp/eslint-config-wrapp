module.exports = {
  extends: [
    './base.js',
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'eslint-config-prettier/react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
  },
}
