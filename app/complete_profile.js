var User = require('./include/lib_users');

exports.render = function(req, res) {
	
	if ( req.user && !req.user.profileComplete ) {
		res.render('complete_profile', {
			user : req.user,
			title: 'Complete Profile' 
		});
	} else if ( req.user ) {
		res.redirect('/dashboard');
	} else {
		// make sure were logged out
		res.redirect('/logout');
	}
	

};

/**
 * Update the users profile
 */
exports.update = function(req, res) {
	
	User.findByID(req.user.id, function (err, user) {

		user.email = req.body.email;
		user.profileComplete = 'TRUE';
	
	    user.save(function(err) {
	        if (err) {
	            return res.send('/', {
	                errors: err.errors,
	                user: user
	            });
	        } else {
	            return res.redirect('/dashboard');
	        }
	    });
	});
};