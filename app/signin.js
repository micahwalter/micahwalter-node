exports.render = function(req, res) {
	if ( req.user )
		res.redirect('/dashboard');
	
    res.render('signin', { 
		title : 'Welcome - Sign in!'
	 });
};
