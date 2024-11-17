/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A set of global variables that need to be available in all test environments
  globals: {
    "babel-jest": {
      babelConfig: true,
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs", 
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "/node_modules/(?!lodash-es)",
    "\\.pnp\\.[^\\/]+$"
  ],
};

export default config;
