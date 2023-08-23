/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.css$": "jest-transform-css",
    "^.+\\.tsx?$": "ts-jest",
  },
};
