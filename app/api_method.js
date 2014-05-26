exports.render = function(req, res) {
    res.render('api_method', {
		user : req.user, 
		title: 'API method' 
	});
};
