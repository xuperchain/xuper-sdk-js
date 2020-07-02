module.exports = {
    projects: [
        {
            displayName: 'browser',
            browser: true,
            preset: 'ts-jest',
            testEnvironment: './test/jest/custom-test-env.js',
            testPathIgnorePatterns: ['node_modules', 'sdk-*'],
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
