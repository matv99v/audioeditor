const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        javascript: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/js/main.js'
        ]
        // html: './public/index.html'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss?$/,
                loaders: ['react-hot', 'style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
