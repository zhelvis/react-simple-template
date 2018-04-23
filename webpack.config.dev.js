const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appPort = require('./config').dev_port;

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        port: appPort,
        clientLogLevel: "error",
        contentBase: "dist",
        compress: true,
        hot: true,
        noInfo: true
    }
};