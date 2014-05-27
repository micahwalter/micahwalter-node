var api_output = require('./lib_api_output');

module.exports = {
	
	formats: function(query){
		
		var rsp = {};
	
		rsp['formats'] = ['json'];
		rsp['default_format'] = 'json';
	
		return api_output.ok(rsp);
		
	},
	
	methods: function(query){
		
		var methods = require('./config_api_methods');
		
		return api_output.ok(methods);
		
	}
	
}
