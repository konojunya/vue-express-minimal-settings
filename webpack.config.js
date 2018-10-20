var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, './public/js/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: '#eval-source-map',
  plugins: [
	new VueLoaderPlugin()
  ]
}

