const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '9rttcd',
  e2e: {
    experimentalMemoryManagement: true,
    video: false,
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
