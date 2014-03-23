var Post = require('./include/lib_posts');

exports.render = function(req, res) {

	// ************************************************************** //

	Post.findByID(req.params['id'], function (err, post) {

	    if ( !post ){
	
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
    
		} else if ( req.user.id != post.user.id ){
			return res.send(401, 'User is not authorized');
		} else {
			res.render('post_delete', {
				user : req.user,
				post : post,
				title: "Delete | " + post.title
			});
	
		}

	});	

	// ************************************************************** //

};

/**
 * Delete a post
 */
exports.update = function(req, res) {
	
	Post.findByID(req.params['id'], function (err, post) {
		
		if ( req.user.id != post.user.id )
			return res.send(401, 'User is not authorized');
			
	    post.remove(function(err) {
	        if (err) {
	            return res.send('/', {
	                errors: err.errors,
	                post: post
	            });
	        } else {
	            return res.redirect('/');
	        }
	    });
	});
};