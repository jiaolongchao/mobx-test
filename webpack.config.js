const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ["es2015", "react", "stage-2"],
            plugins:['transform-decorators-legacy', 'transform-class-properties']
          }
      }]
  },
  devtool: 'inline-source-map' //为了方便调试
}
