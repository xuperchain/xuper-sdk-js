module.exports = {
    preset: 'ts-jest',
    testPathIgnorePatterns: ['node_modules'],
    testEnvironment: './test/custom-test-env.js',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js']
};
