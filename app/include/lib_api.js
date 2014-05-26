var api_output = require('./lib_api_output');

exports.dispatch = function(query) {
	
	// TODO: be sure api is enabled
	
	var method = query.method;
	
	// TODO: get api key / token
	
	// TODO: log the request
	
	var methods = require('./config_api_methods').methods;
	
	var ok = 1;
	
	// TODO: check if the method exists -- this code is yukky cuz im tired right now
	for(var meth in methods){
		if (methods[meth].name == method ){
			ok = 0;
		}	
	}
	
	if ( ok == 1){
		// TODO: something like api_output_error(404, "Method '{$enc_method}' not found");
		return api_output.error(404, "Method " + method + " not found");
		// TODO: figure out how to escape stuff
	} 
	
	var rsp = {};
	rsp['method'] = method;
	return api_output.ok(rsp);
	
	
};