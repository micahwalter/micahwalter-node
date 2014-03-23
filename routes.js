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
	app.post('/p/new-post', authorization.isLoggedIn, post_new.create);
	
	var post = require('./app/post');
	app.get('/p/:id', post.render)

	var post_edit = require('./app/post_edit');
	app.get('/p/:id/edit', authorization.isLoggedIn, post_edit.render);
	app.post('/p/:id/edit', authorization.isLoggedIn, post_edit.update);

	var post_delete = require('./app/post_delete');
	app.get('/p/:id/delete', authorization.isLoggedIn, post_delete.render);
	app.post('/p/:id/delete', authorization.isLoggedIn, post_delete.update);
	
	// About page route
    var about = require('./app/about');
    app.get('/about', about.render);
	
};
