const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}
