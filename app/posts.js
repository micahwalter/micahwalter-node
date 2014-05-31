var Posts = require('./include/lib_posts');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	if ( req.params['page'] ){
		page = req.params['page'];
	} else {
		page = 1;
	}
	
	Posts.findByUserID(req.params['username'], req.params['page'], function (err, posts) {
	
	    if ( !posts ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			res.send(posts);
			// Posts.countByUserID(req.params['username'], req.params['page'], function (err, count) {
			// 		
			// 		// res.render('posts', {
			// 		// 	title : req.params['username'],
			// 		// 	username : req.params['username'],
			// 		// 	posts : posts,
			// 		// 	page : req.params['page'],
			// 		// 	count: count,
			// 		// 	next_page: parseInt(page) + 1,
			// 		// 	pages: Math.ceil(count / 10), // for now 10 per page...
			// 		// 				
			// 		});
			// });
		
		}
	
	});	

	// ************************************************************** //

};