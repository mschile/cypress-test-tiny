const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {},
  },
});
