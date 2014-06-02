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
			
			Post.findAllByUserID(users._id, function(err, posts) {
				res.send(posts);
				// res.render('posts', {
// 					user : req.user,
// 					profile : users,
// 					posts : posts, 
// 					title: 'Profile' 
// 				});				
			});
			
		
		}
	
	});	

	// ************************************************************** //

};