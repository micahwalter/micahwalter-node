var api_output = require('./lib_api_output');

module.exports = {
	
	echo: function(query){
			
		return api_output.ok(query);
		
	},
	
	error: function(query){
				
		return api_output.error(500, 'This is the network of our disconnect');
		
	}
	
}