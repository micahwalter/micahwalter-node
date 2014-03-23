// route middleware to make sure a user is logged in

exports.isLoggedIn = function(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated() && req.user.profileComplete )
		return next();

	// if they aren't ensure they are logged out?
	return res.redirect('/logout');
};

exports.isAuthenticated = function(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't 401 them
	return res.send(401, 'User is not authorized');
};
