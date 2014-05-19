var Tweets = require('./include/lib_tweets');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	Tweets.findByUserID(req.params['username'], function (err, tweets) {
	
	    if ( !tweets ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {

			res.render('tweets', {
				title : req.params['username'],
				user : req.user,
				tweets : tweets
			});
		
		}
	
	});	

	// ************************************************************** //

};