/* eslint-disable */


var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["webpack/hot/dev-server", "./js/main.js"],
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss?$/,
            // exclude: /node_modules/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        },
        {
            test: /\.(woff|woff2)$/,
            // exclude: /node_modules/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
            test: /\.ttf$/,
            // exclude: /node_modules/,
            loader: "file-loader"

        },
        {
            test: /\.eot$/,
            // exclude: /node_modules/,
            loader: "file-loader"
        },
        {
            test: /\.svg$/,
            // exclude: /node_modules/,
            loader: "file-loader"
        }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
