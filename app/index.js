exports.render = function(req, res) {
	if ( req.user )
		res.redirect('/dashboard');
	
    res.render('index', { 
		title : 'Home'
	 });
};
