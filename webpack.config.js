const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    https: false,
    port: process.env.CLIENT_PORT || 8056,
    publicPath: '/assets/',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js|\.jsx$/,
        include: [path.join(__dirname, 'src')],
        options: { cacheDirectory: 'babel_cache', presets: ['react', 'es2015'] }
      },
      {
        loader: 'eslint-loader',
        test: /\.js|\.jsx$/,
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'webpack.config.js')]
      },
      {
        loader: 'ejs-loader',
        test: /\.ejs$/,
        include: [path.join(__dirname, 'src')],
        options: {
          markup: ''
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash"
    }),
    new HtmlWebpackPlugin({
      title: 'Isomorphic React',
      inject: 'body',
      template: path.join(__dirname, 'src', 'index.ejs'),
      filename: path.join(__dirname, 'dist', 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  }
};
