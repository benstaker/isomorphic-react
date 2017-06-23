const webpack = require('webpack');
const path = require('path');
const PostcssImport = require('postcss-import');
const PostcssCssnext = require('postcss-cssnext');
const Cssnano = require('cssnano');
const _ = require('lodash');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const env = process.env.NODE_ENV || 'local';
const isProd = env === 'production';
const isLocal = env === 'local';

console.log(`Running WebPack in ${env} mode`);
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
        test: /\.js|\.jsx$/,
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'webpack.config.js')],
        use: _.compact([
          {
            loader: 'babel-loader',
            options: { cacheDirectory: 'babel_cache', presets: ['react', 'es2015'] }
          },
          isLocal ? {
            loader: 'eslint-loader',
            options: { cache: true, configFile: path.join(__dirname, '.eslintrc') }
          } : null
        ])
      },
      {
        test: /\.ejs$/,
        include: [path.join(__dirname, 'src')],
        use: [{
          loader: 'ejs-loader',
          options: { markup: '' }
        }]
      },
      {
        test: /\.scss$/,
        include: [path.join(__dirname, 'src')],
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          }, {
            loader: 'css-loader',
            options: { importLoaders: 1, sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: _.compact([
                PostcssImport(),
                isProd ? PostcssCssnext({ warnForDuplicates: false }) : null,
                isProd ? Cssnano() : null
              ]),
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: _.compact([
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    isLocal ? new StyleLintPlugin() : null,
    new HtmlWebpackPlugin({
      title: 'Isomorphic React',
      inject: 'body',
      template: path.join(__dirname, 'src', 'index.ejs'),
      filename: path.join(__dirname, 'dist', 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    isProd ? new webpack.optimize.UglifyJsPlugin() : null
  ]),
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  }
};
