var Post = require('./include/lib_posts');

exports.getInfo = function(req, res) {
	
	// ************************************************************** //
	
	Post.findByID(req.query.id, function (err, post) {
	
	    if ( !post ){
			res.send({
				stat:'error', 
				error:{
					code:404, 
					error:'Post not found', 
					message:"Post not found"
			}});
		    
	    
		} else {
			res.send({
				post : {
					author:post.user.twitter.username,
					id:post.id,
					content:post.content,
					title:post.title,
					created:post.created,
					permalink:'https://micahwalter.com/p/' + post.id
				}
			});
		
		}
	
	});	

	// ************************************************************** //

};