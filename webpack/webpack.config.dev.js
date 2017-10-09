const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../public/App.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /node_modules\/three/],
        use: 'babel-loader'
      }
    ]
  }
}