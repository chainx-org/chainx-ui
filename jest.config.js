module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '<rootDir>/src/components/**/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/__test__/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ["@swc/jest"],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy',
    // '\\.svg$': 'identity-obj-proxy',
    '@components': '<rootDir>/src/components',
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
