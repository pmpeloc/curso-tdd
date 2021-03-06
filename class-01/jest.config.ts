/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // clearMocks: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/***/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
