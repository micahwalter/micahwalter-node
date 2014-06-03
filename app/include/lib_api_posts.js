var api_output = require('./lib_api_output');

var Post = require('./lib_posts');

module.exports = {
	
	getInfo: function(req, res, args){
		
		Post.findByID(args.id, function (err, post) {
	
		    if ( !post ){
				api_output.error(req, res, 404, "Post not found");
			} else {
				api_output.ok(req, res, post);
			}
	
		});	
		
	},
		
};