module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['node_modules/**', 'scripts/**', 'sdk-1.*/**'],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/camelcase': 'off',
        'indent': ['error', 4],
        'object-curly-spacing': 'off',
        'comma-dangle': 'off',
        'arrow-parens': 'off'
    }
};
