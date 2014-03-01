exports.render = function(req, res, passport) {
	res.render('profile', {
		user : req.user,
		title: 'Profile'
	});
	
};