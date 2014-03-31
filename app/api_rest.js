exports.call = function(req, res) {	
	res.send({
		stat:'error', 
		error:{
			code:404, 
			error:'Method not found', 
			message:"Method not found"
		}});
};
