var configDB = require('./database');
var mongoose = require('mongoose');

module.exports = function(){
    
    var db = mongoose.connect(configDB.url , {useNewUrlParser:true});
    
    require('../app/models/jokes.models');
    return db;
}