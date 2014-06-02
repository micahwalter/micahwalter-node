var Post = require('./include/lib_posts');
var User = require('./include/lib_users');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	if ( req.params['page'] ){
		page = req.params['page'];
	} else {
		page = 1;
	}
	
	User.findByName(req.params['username'], function (err, users) {
	
	    if ( !users ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			
			Post.findByUserID(users._id, req.params['page'], function(err, posts) {
				
				Post.countByUserID(users._id, req.params['page'], function (err, count) {
				//res.send(posts);
					res.render('posts', {
						title : req.params['username'],
						username : req.params['username'],
						posts : posts,
						page : req.params['page'],
						count: count,
						next_page: parseInt(page) + 1,
						pages: Math.ceil(count / 10), // for now 10 per page...
			
					});
				});
			});
		
		}
	
	});	

	// ************************************************************** //

};