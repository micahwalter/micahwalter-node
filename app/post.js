var marked = require('marked');
var Post = require('./include/lib_posts');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	Post.findByID(req.params['id'], function (err, post) {
	
	    if ( !post ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			res.render('post', {
				user : req.user,
				post : post,
				content: marked(post.content), 
				title: post.title 
			});
		
		}
	
	});	

	// ************************************************************** //

};