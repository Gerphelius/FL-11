const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './img',
          publicPath: '../img',
          useRelativePaths: true,
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
    new CopyWebpackPlugin([
      { from:'./src/img',to:'./img' },
    ]),
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      encoding: 'utf-8',
      extensions: [".js"]
    }),
    new ImageminPlugin({
      pngquant: ({quality: '65-90'}),
      plugins: [imageminMozjpeg({quality: 50})],
	  }),
  ]
};