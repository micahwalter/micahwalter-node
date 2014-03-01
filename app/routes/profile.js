var authorization = require('./middlewares/authorization');

module.exports = function(app, passport) {
	
	app.get('/profile', authorization.isLoggedIn, function(req, res) {
		res.render('profile', {
			user : req.user
		});
	});

};