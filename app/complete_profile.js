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

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_APIKEY);

var async = false;

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
				var message = {
				    "html": "<p>Yo " + user.twitter.displayName + ", how are you?</p>",
				    "text": "Yo " + user.twitter.displayName + ", how are you?",
				    "subject": "Welcome to micahwalter.com",
				    "from_email": "micah@micahwalter.com",
				    "from_name": "Micah Walter",
				    "to": [{
				            "email": user.email,
				            "name": user.twitter.displayName,
				            "type": "to"
				        }],
				    "headers": {
				        "Reply-To": "micah@micahwalter.com"
					}
				};
				
				mandrill_client.messages.send({"message": message, "async": async}, function(result) {
				    // consider logging this in the db?
					console.log(result);
				}, function(e) {
				    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
				});
	            return res.redirect('/dashboard');
	        }
	    });
	});
};