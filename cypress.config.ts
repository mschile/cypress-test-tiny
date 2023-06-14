const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalWebKitSupport: true,
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
