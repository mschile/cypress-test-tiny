const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
