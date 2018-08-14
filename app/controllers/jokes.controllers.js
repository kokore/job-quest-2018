
var Jokes = require('mongoose').model('joke');
exports.all_Joke = function(req,res){
    Jokes.find({} , function(err,joke) {
        if(err){
            res.send(err);
        }else{
            res.json(joke);
        }
        
    });
};

exports.create_joke = function(req , res){
    var newjoke = new Jokes(req.body);
    newjoke.save(function (err,newjoke){
        if(err){
            res.send(err);
        }else{
            res.json(newjoke);
        }
    });
};

exports.find_joke = function(req , res){
    Jokes.findById(req.params.id , function(err,joke){
        if(err){
            res.send(err);
        }else{
            res.json(joke);
        }
    });
};

exports.delete_joke = function(req , res){
    Jokes.remove({
        _id: req.params.id
    },function(err,joke){
        if(err){
            res.send(err);
        }else{
            res.json({ message: 'Joke successfully deleted'});
        }
    });
};

exports.like_joke = function(req, res){
    Jokes.findById(req.params.id , function(err,joke){
        if(err){
            res.send(err);
        }else{
            joke.scorelike += 1;
            joke.save();
            res.json(joke);
        }
    });
};

exports.dislike_joke = function(req, res){
    Jokes.findById(req.params.id , function(err,joke){
        if(err){
            res.send(err);
        }else{
            joke.scoredislike += 1;
            joke.save();
            res.json(joke);
        }
    });
};