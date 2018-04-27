const express = require('express');
const bodyParser = require('body-parser');
const babel = require("babel-core");

const router = express.Router();

router.use(bodyParser.json());

router.post('/converter', function (req, res) {
    let output;
    try{
        output = babel.transform(req.body.code, { presets: ['es2015',"react", "stage-2"] }).code;
    }catch(err){
        console.log(err);
        output = err.message;
    }
    res.send(output);
});

router.get('/converter', function (req, res) {
    res.send('ok');
});

module.exports = router;