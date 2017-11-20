# eslint-config-wrapp

## Install
```
yarn add -D git+ssh://git@github.com:wrapp/eslint-config-wrapp.git
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
