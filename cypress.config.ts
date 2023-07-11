const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '9rttcd',
  hosts: {
    'foobar.com': '127.0.0.1',
  },
  port: 1234,
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
