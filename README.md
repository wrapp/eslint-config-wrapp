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
  ],
  "rules": {
    "no-underscore-dangle": [2, {
      "allow": [" __NEXT_DATA__", "__RUN_TIME_ENV_VARIABLES__", "__INIT_MATERIAL_UI__"],
      "allowAfterThis": true
    }],
  },
  "settings": {
    "polyfills": ["fetch"]
  },
  "globals": {
    "React": false,
    "COMPILE_TIME_ENV_VARS": false
  }
}
```
