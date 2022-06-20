/** @format */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMiniWebpackPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const rootDir = process.cwd()
const WebpackBar = require('webpackbar')

module.exports = {
  entry: {
    index: './lib/index.tsx', //入口是 index.tsx
  },
  //   {
  //   index: {
  //     import: path.resolve(rootDir, 'lib/index'),
  //     filename: 'index.js',
  //     // dependOn: ['Button', 'Icon'],
  //   },
    // Button: path.resolve(rootDir, 'lib/Button/index.tsx'),
    // Icon: './lib/Icon/index.tsx'
  // },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(rootDir, 'dist/lib'),
    library: 'ui_components', // 组件库名称
    libraryTarget: 'umd',  //模块化格式
    // filename: "index.js"
    // filename: "index.js",
    // clean: true,
    // library: 'ui_components',
    // libraryTarget: 'umd',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(rootDir, 'lib')
      // crypto: false,
      // 'react/jsx-runtime': require.resolve('react/jsx-runtime')
    },
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(rootDir, 'public/index.html'),
    //   inject: 'body',
    //   scriptLoading: 'blocking',
    //   minify: {
    //     //压缩HTML文件
    //     removeComments: true, //移除HTML中的注释
    //     collapseWhitespace: true, //删除空白符与换行符
    //   },
    //   favicon: path.resolve(rootDir, 'public/favicon.svg'),
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: '*.js',
    //       context: path.resolve(rootDir, 'public/js'),
    //       to: path.resolve(rootDir, 'dist/js'),
    //     },
    //   ],
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'components/[name]/style/index.css',
    // }),
    // new CssMiniWebpackPlugin(),
    // new webpack.optimize.SplitChunksPlugin(),
    new WebpackBar(),
    // new webpack.ProvidePlugin({
    //   process: 'process/browser.js',
    //   Buffer: ['buffer', 'Buffer'],
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.API_ENV': JSON.stringify(process.env.API_ENV),
    //   API_ENV: JSON.stringify(process.env.API_ENV),
    // }),
  ],
}
