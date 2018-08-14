var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JokeSchema = new Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
    scorelike: {
        type: Number,
        default: 0
    },
    scoredislike: {
        type: Number,
        default: 0
    }
});

mongoose.model('joke',JokeSchema);