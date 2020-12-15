module.exports = {
  preset: 'ts-jest',
  automock: true,
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'dotenv/config',
  ],
  testRegex: '(/tests/.*|(\.|/)(test|spec))\.tsx?$',
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|svg|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/mocks/fileMock.ts',
    '\.(css|less)$': '<rootDir>/src/mocks/styleMock.ts',
    '^@components/(.)$': '<rootDir>/src/components/$1',
    '^@services/(.)$': '<rootDir>/src/services/$1',
    '^@hooks/(.)$': '<rootDir>/src/hooks/$1',
    '^@styles/(.)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },

};

