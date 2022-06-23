module.exports = {
  roots: ['<rootDir>/lib'],
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/**.{ts,tsx}", "!lib/*.{ts,tsx}", "!lib/Button/TxButton.tsx", "!**/node_modules/**"],
  coverageThreshold: {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  testMatch: [
    '<rootDir>/lib/**/__test__/*.{spec,test}.{js,jsx,ts,tsx}',
// '<rootDir>/lib/**/*.{spec,test}.{js,jsx,ts,tsx}',
    // '<rootDir>/__test__/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ["@swc/jest"],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy',
// '\\.svg$': 'identity-obj-proxy',
    '@components': '<rootDir>/lib',
    '^.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules/(?!(antd)/)[/\\\\].+\\.(js|jsx|ts|tsx)$',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest/setupJestDom.ts'
  ],
  setupFiles: [
    '@testing-library/react/dont-cleanup-after-each'
  ]
}
