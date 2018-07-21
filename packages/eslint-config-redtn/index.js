module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  extends: [
    'eslint:recommended'
  ].concat([
    './rules/base'
  ].map(require.resolve)),

  globals: {

  }
};