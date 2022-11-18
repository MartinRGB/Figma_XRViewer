const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const pages = ['index','callback','importer']

module.exports = (env, argv) => ({
  mode: 'production',

  // devtool: `eval`, //inline-source-map
  target: "web",
  devServer: {
    hot: true,
    open: true,
    https: true,
  },

  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ },

      { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },

      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

  // entry: {
  //   index: './src/app/index.tsx', // The entry point for your UI code
  // },

  // output: {
  //   filename: "[name].js",
  //   path: path.resolve(__dirname, '../build'),
  // },
  
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  //   // minimize: true,
  //   // minimizer: [new TerserPlugin()],
  // },

  // plugins: [
  //   // new CompressionWebpackPlugin(),
  //   new webpack.DefinePlugin({
  //     PRODUCTION: JSON.stringify(true),
  //     VERSION: JSON.stringify("5fa3b9"),
  //     BROWSER_SUPPORTS_HTML5: true,
  //     TWO: "1+1",
  //     "typeof window": JSON.stringify("object")
  //   })
  // ].concat(
  //   new HtmlWebpackPlugin({
  //     template: `./src/app/index.html`,
  //     filename: `index.html`,
  //     minify: true,
  //     // inlineSource: '.(js)$',
  //     // inject: false,
  //     // chunks: `index`,
  //     // cache: false
  //   })
  // ),

  entry: pages.reduce((config, page) => {
    config[page] = `./src/app/pages/${page}.tsx`;
    return config;
  }, {}),

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '.' ,'../build'),
  },
  
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  

  plugins: [
    //new HtmlInlineScriptPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    })
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `./src/app/pages/${page}.html`,
          filename: `${page}.html`,
          inlineSource: '.(js)$',
          inject: 'body',
          chunks: [page],
          cache: false
        })
    )
  ),

})