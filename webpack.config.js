const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  // 默认输出到 dist/
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/, // 针对这三种格式的文件使用file-loader处理
        use: {
          loader: 'url-loader',
          options: {
            // 定义打包后文件的名称；
            // [name]:原文件名，[hash]:hash字符串（如果不定义名称，默认就以hash命名，[ext]:原文件的后缀名）
            name: '[name]_[hash].[ext]',
            outputPath: 'images/', //  定义图片输出的文件夹名（在output.path目录下）
            limit: 204800 // 大于200kb的图片会被打包在images文件夹里面，小于这个值的会被以base64的格式写在js文件中
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html', // 通过chunk来指定引入哪些JS文件
      chunk: ['index', 'vendor']
    })
  ]
}
