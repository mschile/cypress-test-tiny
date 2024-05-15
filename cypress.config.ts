const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    blockHosts: [
      '*googleadservices.com',
    ],
    // baseUrl: 'http://127.0.0.1:8080',
    port: 3500,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
