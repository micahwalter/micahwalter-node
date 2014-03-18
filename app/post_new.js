exports.render = function(req, res, passport) {
    res.render('post_new', {
		user : req.user, 
		title: 'New Post' 
	});
};
