var Tweet = require('./include/lib_tweets');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	Tweet.findByID(req.params['id'], function (err, tweet) {
	
	    if ( !tweet ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			res.render('tweet', {
				user : req.user,
				tweet : tweet
			});
		
		}
	
	});	

	// ************************************************************** //

};