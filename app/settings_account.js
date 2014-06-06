var cooperhewitt = require('node-cooperhewitt');
var api_token = process.env.CH_API_KEY;

exports.render = function(req, res, passport) {
	
	var method = 'cooperhewitt.labs.whatWouldMicahSay';
	var args = {'access_token': api_token};
	
	cooperhewitt.call(method, args, function(rsp){	
			res.render('settings_account', {
				user : req.user,
				title: 'Settings | Account',
				wwms: rsp.micah 
			});				
	});	
};