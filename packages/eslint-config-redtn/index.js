const base = require('./rules/base');

const commonExtends = ['airbnb-base', 'prettier'];
const commonPlugins = ['babel'];

module.exports = {
    extends: [...commonExtends],
    plugins: [...commonPlugins],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        ...base,
    },
};
