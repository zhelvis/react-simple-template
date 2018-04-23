const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require( 'webpack-hot-middleware');

const app = express();
const port = require('./config.js').dev_port;
const config = require('./webpack.config.dev.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '\n');
});