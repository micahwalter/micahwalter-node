var cooperhewitt = require('node-cooperhewitt');
var api_token = process.env.CH_API_KEY;


exports.render = function(req, res) {
	if ( req.user )
		res.redirect('/dashboard');
	
	var method = 'cooperhewitt.labs.whatWouldMicahSay';
	var args = {'access_token': api_token};
	
	cooperhewitt.call(method, args, function(rsp){
	    res.render('index', { 
			title : 'Home',
			wwms : rsp.micah
		});
	});
};
