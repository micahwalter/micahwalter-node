var Post = require('./include/lib_posts');

var cooperhewitt = require('node-cooperhewitt');
var api_token = process.env.CH_API_KEY;

exports.render = function(req, res, passport) {
	
	var method = 'cooperhewitt.labs.whatWouldMicahSay';
	var args = {'access_token': api_token};
	
	cooperhewitt.call(method, args, function(rsp){
		Post.findAllByUserID(req.user._id, function(err, posts) {
			res.render('dashboard', {
				user : req.user,
				posts : posts, 
				title: 'Dashboard',
				wwms: rsp.micah 
			});				
		});
	    
	});
	
		
};