import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.css$": "jest-transform-css",
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
