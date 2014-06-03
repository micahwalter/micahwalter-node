var api_output = require('./lib_api_output');

module.exports = {
	
	echo: function(req, res, query) {
		api_output.ok(req, res, query);
	},
	
	error: function(req, res) {
		api_output.error(req, res, 500, 'This is the network of our disconnect');
	}
	
};