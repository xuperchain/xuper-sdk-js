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
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['node_modules/**', 'scripts/**', 'sdk-1.*/**'],
    rules: {
        'indent': ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'comma-dangle': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'arrow-parens': 'off',
        'object-curly-spacing': 'off',

    }
};
