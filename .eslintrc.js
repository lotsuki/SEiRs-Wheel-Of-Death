module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb-base", 'plugin:react/recommended'],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "linebreak-style": 0,
    "max-len": [1, 120, 2, {ignoreComments: true}],
  }
};