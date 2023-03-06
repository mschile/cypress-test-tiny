module.exports = {
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};
