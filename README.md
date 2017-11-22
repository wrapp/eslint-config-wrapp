# eslint-config-wrapp

## Install
```
yarn add -D https://github.com/wrapp/eslint-config-wrapp.git#[Commit hash here]
```
## .eslintrc.js example:

```js
module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "wrapp/react",
    "wrapp/flow",
    "wrapp/jest",
    "wrapp/browser"
  ]
}
```
