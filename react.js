module.exports = {
  "extends": [
    "./base.js",
    "airbnb/rules/react",
    "airbnb/rules/react-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/sort-comp": [1, {
      "order": [
        "type-annotations",
        "static-methods",
        "lifecycle",
        "everything-else",
        "render"
      ]
    }],
  },
}
