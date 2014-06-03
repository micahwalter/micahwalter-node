module.exports = {

	ok: function(req, res, rsp){
		rsp['stat'] = 'ok';	
		res.send(rsp);
	},
	
	error: function(req, res, code, msg){
		
		var rsp = {};
		
		rsp['stat'] = 'error';
		
		rsp['error'] = {		
			'code':code,
			'error':msg,
			'message':msg		
		};
		
		res.send(rsp);
	}
	
};