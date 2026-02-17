/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  repositoryUrl: "https://github.com/your-username/package-repo-name",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
        releaseRules: [
          { breaking: true, release: "major" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "style", release: "patch" },
          { type: "test", release: false },
          { type: "chore", release: false },
          { type: "ci", release: false },
        ],
      },
    ],
    ["@semantic-release/npm", { npmPublish: true }],
  ],
};
