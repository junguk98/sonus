const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        mode: 'DEV',
      },
    }),
  ],
});
