module.exports = {
    rules: {
        'react/react-in-jsx-scope': 0,
        /* This rule will ensure the render() method in React will always have
     * a return statement for all edge cases.
     */
        'consistent-return': 'error',
        'react/sort-comp': ['error', {
            'order': [
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ],
            'groups': {
                'lifecycle': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'initialState',
                    'state',
                    'getInitialState',
                    'getChildContext',
                    'getDerivedStateFromProps',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount'
                ]
            }
        }
        ]
    }
};