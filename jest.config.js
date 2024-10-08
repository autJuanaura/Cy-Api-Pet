module.exports = {
    // The root of your source code
    roots: ['<rootDir>/src'],
  
    // The test environment that will be used for testing
    testEnvironment: 'node',
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  
    // The module file extensions that Jest will look for
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  
    // The reporter that will be used to generate test reports
    reporters: ['default', 'jest-junit'],
  
    // The configuration for the jest-junit reporter
    jestJunit: {
      output: './reports/junit.xml',
    },
  };