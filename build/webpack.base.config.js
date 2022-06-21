/** @format */

const path = require('path')
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
    },
  },
  plugins: [
    new WebpackBar(),
  ],
}
