var User = require('./include/lib_users');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	User.findByName(req.params['username'], function (err, users) {
	
	    if ( !users ){
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    } else {
			res.render('profile', {
				user : req.user,
				profile : users, 
				title: 'Profile' 
			});
		}
	
	});	

	// ************************************************************** //

};