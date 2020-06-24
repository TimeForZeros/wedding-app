module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
