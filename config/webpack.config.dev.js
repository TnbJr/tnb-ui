const merge = require('webpack-merge');
// Configs
const baseConfig = require('./webpack.config.base');

const devConfiguration = env => {
    return merge([
      {
        devServer: {
          historyApiFallback: true,
        },
      },
    ]);
  }


module.exports = env => {
    return merge(baseConfig, devConfiguration(env));
  }