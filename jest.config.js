// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/components/**/index.ts",
    "!src/app/icon.tsx",
    "!src/app/layout.tsx",
    "!src/app/page.tsx",
    "!src/globals.css",
    "!jest.setup.ts",
  ],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
