var api_output = require('./lib_api_output');

exports.methods = function(){
	
	var rsp = {};
	rsp['method'] = 'api.spec.methods';
	
	return api_output.ok(rsp);
	
}
