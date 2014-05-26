exports.dispatch = function(query, req, res) {
	
	var method = query.method;
	// send something back...	
	res.send(method);
	
};