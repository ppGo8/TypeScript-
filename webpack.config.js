const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js"
  },
  // 开发服务器,不必要每次更改后重新Build;
  // 此处配置后还需要更改package.json文件，使得启动服务的是这个服务器,而不是webpack
  devServer: {
    // webpack5是static而非contentBase
    static: "/dist",
    open: true, // 打包后自动打开服务器
  },
  resolve : {
    // webpack匹配未写后缀名的文件 手动配置;默认未 .js .json
    "extensions": ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        // 处理.css文件
        test: /\.css/,
        // 1.css-loader分析各个css文件之间依赖关系,合并成一个css 
        // 2.style-loader将css-loader生成的内容挂在到header中 
        use: ['style-loader', 'css-loader'] 
      },
      // 处理字体文件
      {
        test: /\.(eot|woff2|ttf|woff|svg)/,
        use: ['file-loader']
      },
      // 处理ts文件
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // html模板
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // 清空dist目录
    new CleanWebpackPlugin(),
  ],
  mode: 'development'
}