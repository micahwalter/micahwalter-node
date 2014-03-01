var talks = require('../controllers/talks');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.talk.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/talks', talks.all);
    app.post('/talks', authorization.isLoggedIn, talks.create);
    app.get('/talks/:talkId', talks.show);
    app.put('/talks/:talkId', authorization.isLoggedIn, hasAuthorization, talks.update);
    app.del('/talks/:talkId', authorization.isLoggedIn, hasAuthorization, talks.destroy);

    app.param('talkId', talks.talk);

};