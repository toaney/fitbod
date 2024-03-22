const nextJest = require('next/jest')
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
    url: 'https://jestjs.io/',
    userAgent: 'Agent/007',
  },
  preset: 'ts-jest',
  verbose: true,
}
 
module.exports = createJestConfig(config)