exports.render = function(req, res) {
	res.render('projects', {
		user : req.user, 
		title: 'Projects' 
	});
};