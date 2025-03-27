
// jest.config.js
module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Add this
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    reporters: [
      'default',
      ['jest-junit', { outputDirectory: 'test-results' }]
    ]
  };
  
// module.exports = {
//     transform: {
//         '^.+\\.jsx?$': 'babel-jest',
//     },
//     moduleFileExtensions: ['js', 'jsx'],
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
//     reporters: [
//         'default',
//         ['jest-junit', { outputDirectory: 'test-results' }]
//       ]
// };