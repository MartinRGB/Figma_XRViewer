const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',

  // This is necessary because Figma's 'eval' works differently than normal eval
  devtool: argv.mode === 'production' ? false : 'inline-source-map', //inline-source-map

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

  entry: {
    ui: `./src/app/pages/GLTFViewer.tsx`, // The entry point for your UI code
    code: `./src/plugin/GLTFViewer.ts`, // The entry point for your plugin code
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.' ,`../XRViewer_GLTF`), // Compile into a folder called "dist"
  },

  // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/app/pages/GLTFViewer.html`,
      // template: `./src/app/pages/platform.html`,
      filename: 'ui.html',
      inlineSource: '.(js)$',
      inject: 'body',
      chunks: ['ui'],
      cache: false
    }),
    //new HtmlWebpackInlineSourcePlugin(),
    new HtmlInlineScriptPlugin(),
    new webpack.DefinePlugin({
      // PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object"),
    }),
    //...(argv.mode === 'production' ? [] : [new BundleAnalyzerPlugin({analyzerPort:`${env.PLUGIN === 'xrviewer'?9001:env.PLUGIN === 'unity'?9002:9003}`})]),
  ],

})