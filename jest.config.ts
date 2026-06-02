/* eslint-disable */
import type { Config } from 'jest'

const config: Config = {
  displayName: 'onecx-bookmark-ui',
  verbose: false,
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|@ngrx|@onecx|deck\\.gl|d3-scale|d3-scale-chromatic|d3-array|d3-color|d3-format|d3-interpolate|d3-time|d3-time-format|internmap)'
  ],
  moduleNameMapper: {
    '^keycloak-js$': '<rootDir>/src/test/mocks/keycloak-js.mock.ts',
    '^d3-scale-chromatic$': '<rootDir>/src/test/mocks/d3-scale-chromatic.mock.ts'
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage/',
  coveragePathIgnorePatterns: ['src/app/shared/generated'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: './reports',
        outputName: 'sonarqube_report.xml',
        reportedFilePath: 'absolute'
      }
    ]
  ]
}

export default config
