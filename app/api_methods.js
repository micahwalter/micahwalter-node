var methods = require('./include/config_api_methods').methods;

exports.render = function(req, res) {
		
    res.render('api_methods', {
		methods: methods,
		user : req.user, 
		title: 'api | methods' 
	});
};
