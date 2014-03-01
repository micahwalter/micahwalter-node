exports.render = function(req, res) {
    res.render('index', { 
		user : req.user,
		title : 'Hello World'
	 });
};
