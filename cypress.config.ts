const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium") {
          launchOptions.args.push('--js-flags="--max_old_space_size=4096 --max_semi_space_size=4096"');
        }
        return launchOptions;
      });

      return config;
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
