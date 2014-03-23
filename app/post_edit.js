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
			res.render('post_edit', {
				user : req.user,
				post : post,
				title: "Edit | " + post.title
			});
	
		}

	});	

	// ************************************************************** //

};

/**
 * Update a post
 */
exports.update = function(req, res) {
	
	Post.findByID(req.params['id'], function (err, post) {
		
		if ( req.user.id != post.user.id )
			return res.send(401, 'User is not authorized');
		
		post.title = req.body.title;
		post.content = req.body.content;
	
	    post.save(function(err) {
	        if (err) {
	            return res.send('/', {
	                errors: err.errors,
	                post: post
	            });
	        } else {
	            return res.redirect('/p/' + post.id);
	        }
	    });
	});
};