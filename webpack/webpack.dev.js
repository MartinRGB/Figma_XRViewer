const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const pages = ['index','callback','importer']

module.exports = {
  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ }, //ts-loader

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },

      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({ extensions: ['.tsx', '.ts', '.js', '.json', '.png', '.jpg'],}),
    ],
    mainFields: ['main', 'module', 'browser'],
  },

  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    //webpack5
    // static: path.resolve(__dirname, '.', './build'), 
    hot: true,
    open: true,
    https: true,
    // host: '0.0.0.0',
    // port: 8081
    port:8887,
  },
  // entry:  path.resolve(__dirname, '..', './src/app/index.tsx'),
  // output: {
  //   path: path.resolve(__dirname, '..', '../build'),
  //   filename: 'bundle.js',
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '..', './src/app/index.html'),
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env.name': JSON.stringify('Vishwas'),
  //   }),
  // ],
  entry: pages.reduce((config, page) => {
    config[page] = `./src/app/pages/${page}.tsx`;
    return config;
  }, {}),

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '..', '../build'),
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    })
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/app/pages/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),

}