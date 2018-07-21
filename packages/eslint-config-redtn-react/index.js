module.exports = {
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
  },

  plugins: [
    'react'
  ],

  extends: [
    'eslint-config-redtn',
    'plugin:react/recommended'
  ].concat([
    './rules/react'
  ].map(require.resolve))

};