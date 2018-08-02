const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  //mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {//这里的顺序决定了，他在引入的时候，先找到什么就引入什么，比如同时有index.native.js,index.js,会先引index.js
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-2"],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.ts(x?)$/,
        include: [resolve('src')],
        use: ['awesome-typescript-loader']
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: 'inline-source-map' //为了方便调试
  
}
