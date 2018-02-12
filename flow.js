module.exports = {
  extends: ['plugin:flowtype/recommended', 'eslint-config-prettier/flowtype'],
  rules: {
    'flowtype/require-valid-file-annotation': [2, 'always'],
  },
  plugins: ['flowtype'],
}
