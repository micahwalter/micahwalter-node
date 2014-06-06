var User = require('./include/lib_users');
var Post = require('./include/lib_posts');
var Tweets = require('./include/lib_tweets');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	User.findByName(req.params['username'], function (err, users) {
	
	    if ( !users ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			
			Post.findAllByUserID(users._id, function(err, posts) {
					Tweets.findByUserID(req.params['username'], "1", function (err, tweets) {
						res.render('profile', {
							user : req.user,
							profile : users,
							posts : posts,
							tweets: tweets, 
							title: 'Profile' 
						});				
						
					});
					
			});
			
		
		}
	
	});	

	// ************************************************************** //

};