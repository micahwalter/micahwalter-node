var Post = require('./include/lib_posts');

exports.render = function(req, res, passport) {
	
	Post.findAllByUserID(req.user._id, function(err, posts) {
		res.render('dashboard', {
			user : req.user,
			posts : posts, 
			title: 'Dashboard' 
		});				
	});
		
};