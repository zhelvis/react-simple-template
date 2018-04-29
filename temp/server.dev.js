const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require( 'webpack-hot-middleware');

const app = express();
const port = require('./config.js').dev_port;
const wpConfig = require('./webpack.config.dev.js');
const compiler = webpack(wpConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '\n');
});