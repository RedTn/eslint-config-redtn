module.exports = {
  rules: {
    'react/react-in-jsx-scope': 0,
    /* This rule will ensure the render() method in React will always have
     * a return statement for all edge cases.
     */
    'consistent-return': 'error'
  }
};