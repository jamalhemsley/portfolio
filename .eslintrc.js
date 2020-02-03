module.exports = {
    env: {
        amd: true,
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: `airbnb`,
    globals: {
        __PATH_PREFIX__: true,
    },
    parserOptions: {
        sourceType: `module`,
    },
    root: true,
    rules: {
        indent: ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
    },
};
