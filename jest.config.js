module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: 'test-results' }]
      ]
};