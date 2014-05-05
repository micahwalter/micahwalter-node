exports.render = function(req, res) {
    res.render('about', {
		user : req.user, 
		title: 'about' 
	});
};
