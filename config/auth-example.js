// config/auth-example.js
	
module.exports = {
	'secret' : 'S33KREETS!',
	
	'twitterAuth' : {
		'consumerKey' 		: 'twitter-consumer-key',
		'consumerSecret' 	: 'twitter-consumer-secret',
		'callbackURL' 		: 'http://example.com/auth/twitter/callback'
	},
	
	'facebookAuth' : {
		'clientID' 		: 'facebook-client-id',
		'clientSecret' 	: 'facebook-client-secret',
		'callbackURL' 	: 'http://example.com/auth/facebook/callback'
	},
					
};
