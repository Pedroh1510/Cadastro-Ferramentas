const { defaults: tsjPreset } = require('ts-jest/presets')
module.exports = {
  preset: '@shelf/jest-mongodb',
  // preset: 'ts-jest',
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/protocols/**',
    '!src/main/**'
  ],
  coverageReporters: ['json', 'lcov']
}
