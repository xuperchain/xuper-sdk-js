module.exports = {
    // preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['node_modules'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js']
};
