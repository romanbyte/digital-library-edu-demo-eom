const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/images/[hash][ext]',
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Электронный образовательный материал',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],
  module: {
    rules: [
      // HTML
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src/assets/views'),
        use: ['html-loader']
      },
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      // Images
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080
  }
};
