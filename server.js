const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appPort = require('./config').port;

app.use(
    express.static(__dirname + '/dist'),
    bodyParser()
);

app.get('/', function (req, res) {
    res.send('index');
});

app.listen(appPort, function () {
    console.log('Example app listening on port ' + appPort);
});