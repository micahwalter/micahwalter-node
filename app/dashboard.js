exports.render = function(req, res, passport) {
	res.render('dashboard', {
		user : req.user,
		title: 'Dashboard'
	});
	
};