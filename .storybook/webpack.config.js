const path = require('path');
const paths = require('../config/paths');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
        'style-loader',
        {
          loader: "css-loader",
          options: {
              sourceMap: true
          }
        },
        // 'sass-loader'
        {
          loader: 'sass-loader', // compiles SASS to CSS
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              paths.globalStyles
            ]
          },
        }
    ],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};