module.exports = {
    '*.{js,jsx}': ['prettier --write', 'eslint --fix'],
    'package.json': ['sort-package-json'],
};
