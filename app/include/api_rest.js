exports.call = function(req, res) {

	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
			
	res.send({
		method:query.method,
		stat:'error', 
		error:{
			code:404, 
			error:'Method not found', 
			message:"Method not found"
		}});
};
