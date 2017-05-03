const webpack = require('webpack');
const path = require('path');

const config = {
  context: __dirname,
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    // publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: ['babel-loader']
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  watch: true,
  devtool: 'source-map'
};

module.exports = config;
