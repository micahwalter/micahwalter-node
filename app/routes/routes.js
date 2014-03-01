// app/routes.js

var authorization = require('./middlewares/authorization');

module.exports = function(app, passport) {
	
	app.get('/profile', authorization.isLoggedIn, function(req, res) {
		res.render('profile', {
			user : req.user
		});
	});
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	
	// =====================================
	// TWITTER ROUTES ======================
	// =====================================
	// route for twitter authentication and login
	app.get('/auth/twitter', passport.authenticate('twitter'));

	// handle the callback after twitter has authenticated the user
	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', {
			successRedirect : '/profile',
			failureRedirect : '/'
		}));
	

};

