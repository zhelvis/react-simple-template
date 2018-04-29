const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = require('./config').port;

app.use(
    express.static(__dirname + '/dist'),
    bodyParser()
);

app.get('/', function (req, res) {
    res.send('index');
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '\n');
});