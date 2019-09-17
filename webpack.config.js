const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            require("@babel/plugin-transform-arrow-functions"),
            require("@babel/plugin-proposal-class-properties"),
        ]
        }
      }
    },
    {test: /\.css$/, use: ['style-loader', 'css-loader']},
  ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};