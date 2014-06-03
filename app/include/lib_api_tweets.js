var api_output = require('./lib_api_output');

var Tweet = require('./lib_tweets');

module.exports = {
	
	getInfo: function(req, res, args){
		
		Tweet.findByID(args.id, function (err, tweet) {
	
		    if ( !tweet ){
				api_output.error(req, res, 404, "Tweet not found");
			} else {
				api_output.ok(req, res, tweet);
			}
	
		});	
		
	},
		
};