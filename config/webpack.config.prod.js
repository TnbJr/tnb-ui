/* eslint-disable */
const paths = require('./paths')
const merge = require('webpack-merge');
// Plugins
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
// Configs
const baseConfig = require('./webpack.config.base');

const prodConfiguration = env => {
  return merge([
  {    
    entry: {
      main: paths.appIndexJs,
      // styleguide: paths.
    },
    output: {
      path: paths.appBuild,
      filename: 'index.js',
      library: '',
      libraryTarget: 'commonjs'
    }
  }
  ]);
}

module.exports = env => {
  return merge(baseConfig, prodConfiguration(env));
}