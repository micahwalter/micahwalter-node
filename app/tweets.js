var Tweets = require('./include/lib_tweets');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	if ( req.params['page'] ){
		page = req.params['page'];
	} else {
		page = 1;
	}
	
	Tweets.findByUserID(req.params['username'], req.params['page'], function (err, tweets) {
	
	    if ( !tweets ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			
			Tweets.countByUserID(req.params['username'], req.params['page'], function (err, count) {
					//res.send(tweets);
					res.render('tweets', {
						title : req.params['username'],
						username : req.params['username'],
						tweets : tweets,
						page : req.params['page'],
						count: count,
						abs_base_url: req,
						next_page: parseInt(page) + 1,
						pages: Math.ceil(count / 10), // for now 10 per page...
				
					});
			});
		
		}
	
	});	

	// ************************************************************** //

};