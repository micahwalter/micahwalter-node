var authorization = require('./middlewares/authorization');

module.exports = function(app, passport) {
	    
	
	// route for twitter authentication and login
	app.get('/auth/twitter', passport.authenticate('twitter'));

	// handle the callback after twitter has authenticated the user
	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', {
			successRedirect : '/dashboard',
			failureRedirect : '/'
		}));
		
	// logout
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
    	
	// Home route
    var index = require('./app/index');
    app.get('/', index.render);
			
    // Dashboard route
    var dashboard = require('./app/dashboard');
    app.get('/dashboard', authorization.isLoggedIn, dashboard.render);
	
	// Profile route
	var profile = require('./app/profile');
	app.get('/@:username', profile.render);
	
    // Posts
	var post_new = require('./app/post_new');
	app.get('/p/new-post', authorization.isLoggedIn, post_new.render);
	
	// About page route
    var about = require('./app/about');
    app.get('/about', about.render);
	
};
