exports.render = function(req, res) {
    res.render('api', {
		user : req.user, 
		title: 'API' 
	});
};