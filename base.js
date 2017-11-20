module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb-base"],
  "rules": {
    "semi": [2, "never"],
    "arrow-body-style": 0,
    "no-unused-expressions": [2, { "allowTaggedTemplates": true }],
    "dot-notation": 0,
    "arrow-parens": [2, "always"],
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false
    }],


    "import/prefer-default-export": 0,
    "import/newline-after-import": ["error", { "count": 2 }],

    "function-paren-newline": ["error", "consistent"]
  },
}
