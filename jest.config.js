// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Stop running tests after `n` failures
  bail: 1,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin'
  }
}
