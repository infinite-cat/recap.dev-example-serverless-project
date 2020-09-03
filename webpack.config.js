const path = require('path')
const slsw = require('serverless-webpack')
const webpack = require('webpack')

module.exports = {
  entry: slsw.lib.entries,
  externals: [
    /aws-sdk/,
  ],
  mode: 'development',
  target: 'node',
  resolve: {
    mainFields: ['main'],
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx',
      '.mjs',
    ],
    alias: {
      mysql: path.resolve('./node_modules/mysql'),
      pg: path.resolve('./node_modules/pg'),
    },
  },
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test(modulePath) {
          return modulePath.endsWith('.ts') && !modulePath.endsWith('test.ts')
        },
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
    ],
  },
}
