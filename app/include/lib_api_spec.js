var api_output = require('./lib_api_output');

module.exports = {
		
	formats: function(req, res){
		
		var rsp = {};
	
		rsp['formats'] = ['json'];
		rsp['default_format'] = 'json';
	
		api_output.ok(req, res, rsp);
		
	},
	
	methods: function(req, res){
		
		var methods = require('./config_api_methods');
		
		api_output.ok(req, res, methods);
		
	}
	
};