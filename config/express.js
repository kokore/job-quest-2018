var express = require('express');

module.exports = function(){
    var app = express();

    //rountes
    require('../app/routes/jokes.routes')(app);

    return app;
}