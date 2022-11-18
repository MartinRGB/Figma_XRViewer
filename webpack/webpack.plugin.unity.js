//const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map', //inline-source-map

  entry: {
    ui: './src/app/pages/unity.tsx', // The entry point for your UI code
    code: './src/plugin/unity.ts', // The entry point for your plugin code
  },
  devServer: {
    hot: true,
    open: true,
    https: true,
  },

  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },

      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.' ,'../XRViewer_Unity'), // Compile into a folder called "dist"
  },

  // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/pages/unity.html',
      filename: 'ui.html',
      inlineSource: '.(js)$',
      inject: 'body',
      chunks: ['ui'],
      cache: false
    }),
    //new HtmlWebpackInlineSourcePlugin(),
    new HtmlInlineScriptPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    })
  ],

})