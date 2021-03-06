const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  //mode: 'development',
  //entry: path.resolve(__dirname, 'src/index.tsx'), 
  entry: {   
    main: [
      'react-hot-loader/patch',
      './build/dev-client',
      "./src/index.tsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js',
    //publicPath:'http://localhost/'  //hot reloading 会在嵌套的路由有效
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.jsx', '.json', ".webpack.js", ".web.js", ".ts", ".tsx"]
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
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        test: /\.ts(x?)$/,
        use: ['babel-loader', 'awesome-typescript-loader']
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  /* externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }, */
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map', 
  plugins: [    
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     
      template: 'index.html', //指向根目录的html context运行环境的上下文就是根目录
      filename: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
}
