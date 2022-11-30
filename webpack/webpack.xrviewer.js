const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const CompressionPlugin = require("compression-webpack-plugin");

const pages = ['xrviewer','callback','importer']

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map', //inline-source-map
  target: "web",
  devServer: {
    hot: true,
    open: true,
    https: true,
    port:8887,
  },

  module: {
    rules: [
      // Converts TypeScript code to JavaScript
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ },

      { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },

      // Enables including CSS by doing "import './file.css'" in your TypeScript code
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader'}] },

      // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
    ],
  },

  // Webpack tries these extensions for you if you omit the extension like "import './file'"
  resolve: { 
    extensions: ['.ts','.tsx', '.js','.jsx', ],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.tsx', '.ts', '.js', '.json', '.png', '.jpg'],
      }),
    ],
  },

  entry: pages.reduce((config, page) => {
    config[page] = `./src/app/pages/${page}.tsx`;
    return config;
  }, {}),

  output: {
    publicPath: '',
    filename: "[name].js",
    path: path.resolve(__dirname, '.' ,'../build'),
  },
  
  optimization: {
    minimize:true,
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
      "typeof window": JSON.stringify("object"),
      'process.env.name': JSON.stringify('Vishwas'),
      "process.env.PLATFORM": JSON.stringify(`${env.PLATFORM}`),
    }),
    //...(argv.mode === 'production' ? [] : [new BundleAnalyzerPlugin({analyzerPort:9000})]),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `./src/app/pages/${page}.html`,
          filename: `${page === 'xrviewer'?'index':`${page}`}.html`,
          inlineSource: '.(js)$',
          inject: 'body',
          chunks: [page],
          cache: false
        })
    )
  ),

})