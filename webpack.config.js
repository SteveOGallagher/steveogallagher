var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

var DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, DefinePlugin]
}