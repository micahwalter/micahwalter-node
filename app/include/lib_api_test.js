var api_output = require('./lib_api_output');

module.exports = {
	
	echo: function(){
		
		var rsp = {};
	
		rsp['method'] = 'test.echo';
		rsp['note'] = 'this doesn\'t really work yet';
	
		return api_output.ok(rsp);
		
	},
	
	error: function(){
				
		return api_output.error(500, 'This is the network of our disconnect');
		
	}
	
}