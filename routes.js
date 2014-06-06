var authorization = require('./middlewares/authorization');


module.exports = function(app, passport) {
	    
	
	// route for twitter authentication and login
	app.get('/auth/twitter', passport.authenticate('twitter'));

	// handle the callback after twitter has authenticated the user
	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { failureRedirect : '/' }),
		function(req, res) {
			if (req.user.profileComplete){
				res.redirect('/dashboard');
			} else {
				res.redirect('/complete-profile');
			}
		}
	
	);
	
	// complete profile
	var complete_profile = require('./app/complete_profile');
	app.get('/complete-profile', complete_profile.render);
	app.post('/complete-profile', authorization.isAuthenticated, complete_profile.update);
		
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
	
	// account settings
	var settings_account = require('./app/settings_account');
	app.get('/settings', function(req, res) {
		res.redirect('/settings/account');
	});
	app.get('/settings/account', authorization.isLoggedIn, settings_account.render)
	
	// Profile route
	var profile = require('./app/profile');
	app.get('/@:username', profile.render);
	
    // Posts
	var post_new = require('./app/post_new');
	app.get('/p/new-post', authorization.isLoggedIn, post_new.render);
	app.post('/p/new-post', authorization.isLoggedIn, post_new.create);
	
	var post = require('./app/post');
	app.get('/p/:id', post.render);

	var post_edit = require('./app/post_edit');
	app.get('/p/:id/edit', authorization.isLoggedIn, post_edit.render);
	app.post('/p/:id/edit', authorization.isLoggedIn, post_edit.update);

	var post_delete = require('./app/post_delete');
	app.get('/p/:id/delete', authorization.isLoggedIn, post_delete.render);
	app.post('/p/:id/delete', authorization.isLoggedIn, post_delete.update);
	
	var posts = require('./app/posts');
	app.get('/@:username/posts/:page?', posts.render);
	
	// Tweets
	var tweet = require('./app/tweet');
	app.get('/t/:id', tweet.render);
	
	var tweets = require('./app/tweets');
	app.get('/@:username/tweets/:page?', tweets.render);

	// Search
	var search_form = require('./app/search_form');
	app.get('/search', search_form.render);
	app.post('/search', search_form.search);
	
	var search = require('./app/search');
	app.get('/search/:query/:page?', search.render);
	
	
	// About page route
    var about = require('./app/about');
    app.get('/about', about.render);
	
	// Redirects
	app.get('/post/:id/:title?*', function(req, res) {
		res.redirect('http://micahwalter.tumblr.com/post/' + req.params['id'] + '/' + req.params['title'] );
	});
	
	/***********************************************************/
	
	// API Documentation
	
	var api = require('./app/api');
	app.get('/api', api.render);
	
	var api_methods = require('./app/api_methods');
	app.get('/api/methods', api_methods.render);

	var api_method = require('./app/api_method');
	app.get('/api/methods/:method', api_method.render);

	// The API
	
	var api_rest = require('./app/api_rest');
	app.all('/rest/:query?', api_rest.call);
	
};
