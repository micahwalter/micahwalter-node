exports.render = function(req, res) {
    res.render('api_methods', {
		user : req.user, 
		title: 'API methods' 
	});
};
