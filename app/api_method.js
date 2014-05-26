var methods = require('./include/config_api_methods').methods;

exports.render = function(req, res) {
	
	for(var method in methods){
		if ( methods[method].name == req.params['method']){
			var meth = methods[method];
		}	
	}
	
	
    res.render('api_method', {
		method: meth,
		user : req.user, 
		title: 'api | methods | ' + req.params['method'],
		 
	});
};
