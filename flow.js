module.exports = {
  extends: ['plugin:flowtype/recommended'],
  rules: {
    'flowtype/require-valid-file-annotation': [ 2, 'always' ],
  },
  plugins: [
    'flowtype',
  ],
}
