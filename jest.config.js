const conf = {
    preset: 'ts-jest',
    testPathIgnorePatterns: ['node_modules', 'sdk-1.*']
};

module.exports = {
    projects: [
        {
            displayName: 'browser',
            testEnvironment: './test/jest/custom-test-env.js',
            ...conf
        },
        // {
        //     displayName: 'Nodejs',
        //     testEnvironment: 'node',
        //     ...conf
        // }
    ]
};
