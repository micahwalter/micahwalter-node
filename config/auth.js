// config/auth.js
	
module.exports = {
	'secret' : process.env.SECRET,
	
	'twitterAuth' : {
		'consumerKey' 		: process.env.TWITTER_KEY,
		'consumerSecret' 	: process.env.TWITTER_SECRET,
		'callbackURL' 		: process.env.TWITTER_CALLBACK
	},					
};
