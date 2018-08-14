module.exports = function(app){
    var joke = require('../controllers/jokes.controllers');

    app.route('/')
    .get(joke.all_Joke)
    .post(joke.create_joke);

    app.route('/:id')
    .get(joke.find_joke)
    .delete(joke.delete_joke);

    app.post('/:id/like',joke.like_joke);

    app.post('/:id/dislike',joke.dislike_joke);
}