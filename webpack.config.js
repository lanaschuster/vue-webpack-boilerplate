const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json', '.vue', '.scss']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          esModule: false
        }
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true,
    hot: true
  },
  externals: {
    vue: 'Vue'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
