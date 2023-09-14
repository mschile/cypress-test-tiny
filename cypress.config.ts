module.exports = {
  projectId: '9rttcd',
  fixturesFolder: 'cypress/fixtures',
  // port: 3001,
  e2e: {
    supportFile: false,
  },
  component: {
    experimentalSingleTabRunMode: true,
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
        ...require('./webpack.config'),
        devServer: {
          port: 3005,
        },
      },
    },
  },
};
