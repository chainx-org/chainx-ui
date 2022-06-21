/** @format */

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  }
})
