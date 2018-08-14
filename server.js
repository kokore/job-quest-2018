// setup
var express = require('./config/express');
var mongoose = require('./config/mongoose');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cookie = require('cookie-session');

//connect db
var db = mongoose();
var app = express();

app.use(bodyParser.urlencoded ({ extended:true}));
app.use(bodyParser.json());

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'});
});
app.use(cookie({
    name: 'session',
    keys: ['secret_key1' , 'secret_key2'],
    maxAge: 24 * 60 * 60 * 1000
}));

module.exports = db;
//launch
app.listen(port);
module.exports = app;
console.log("GO TO PORT:"+port);