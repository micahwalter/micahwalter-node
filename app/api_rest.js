var api = require('./include/lib_api');

module.exports = {
	
	call: function(req, res) {

		var url = require('url');
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		
		api.dispatch(req, res, query);		
	}
		
};