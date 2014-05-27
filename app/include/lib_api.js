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
			var method_meta = methods[meth];
			ok = 0;
		}	
	}
	
	if ( ok == 1){
		return api_output.error(404, "Method " + method + " not found");
		// TODO: figure out how to escape stuff
	} 
	
	// TODO: all the other checks .. oauth, get vs. post, etc...
	
	// GO...
	
	var api_lib = require('./lib_' + method_meta.library);

	var func = method_meta.name.split('.').pop();
		
	return eval('api_lib.' + func + '()');
		
};