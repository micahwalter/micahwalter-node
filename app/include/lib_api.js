var api_output = require('./lib_api_output');

module.exports = {
	
	dispatch: function(req, res, query) {
		
		var method = query.method;
		
		var methods = require('./config_api_methods').methods;
		
		var ok = 1;
		
		for(var meth in methods){
			if (methods[meth].name == method ){
				var method_meta = methods[meth];
				ok = 0;
			}	
		}
		
		if ( ok == 1){
			api_output.error(req, res, 404, "Method " + method + " not found");
		} else {		
			var api_lib = require('./lib_' + method_meta.library);
			var func = method_meta.name.split('.').pop();	
			eval('api_lib.' + func + '(req, res, query)');
		}
			
	}
	
};