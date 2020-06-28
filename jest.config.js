module.exports = {
    projects: [
        {
            displayName: 'browser',
            browser: true,
            preset: 'ts-jest',
            testPathIgnorePatterns: ['node_modules', 'sdk-*'],
            testEnvironment: './test/jest/custom-test-env.js',
            transform: {
                '^.+\\.tsx?$': 'ts-jest'
            },
            moduleFileExtensions: ['ts', 'js']
        },
        {
            displayName: 'node',
            preset: 'ts-jest',
            testEnvironment: 'node',
            testPathIgnorePatterns: ['node_modules', 'sdk-*'],
            transform: {
                '^.+\\.tsx?$': 'ts-jest'
            },
            moduleFileExtensions: ['ts', 'js']
        }
    ]
};
