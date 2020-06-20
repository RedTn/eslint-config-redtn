const react = require('./rules/react');

const commonExtends = ['airbnb', 'redtn', 'prettier/react'];
const commonPlugins = ['react-hooks'];

module.exports = {
    extends: [...commonExtends],
    plugins: [...commonPlugins],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        ...react,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
