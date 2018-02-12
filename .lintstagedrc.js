module.exports = {
  linters: {
    '*.{js, jsx}': ['lint:fix'],
    '*.{js, jsx, graphql}': ['format', 'git add'],
  },
}
