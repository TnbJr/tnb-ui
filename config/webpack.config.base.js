const paths = require('./paths');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: paths.styleGuide,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                  sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                debug: true
              }
            },
            {
              loader: 'sass-loader', // compiles SASS to CSS
              options: {
                sourceMap: true
              }
            },
        ]
      },
    //   {
    //     test: /\.(png|jpg|gif|svg|ico)$/,
    //     loader: 'file-loader',
    //     query:{
    //         outputPath: './img/',
    //         name: '[name].[ext]?[hash]'
    //     }
    // },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    },
    {
        test: /\.(eot|ttf|otf|woff|woff2|json|xml|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './font/[name].[ext]'
            }
          }
        ]
       
        // query:{
        //     outputPath: './fonts/',
        //     name: '[name].[ext]'
        // }
    },
    ]
  },
  resolve: {
    alias: {
      fonts: paths.fonts,
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebPackPlugin({
      template: paths.appHtml,
      filename: "./index.html"
    }),
    // new CopyWebpackPlugin([ { from: 'src/lib/static', to: 'static' } ]),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};