module.exports = {
	
	ok: function(rsp, more){
		if ( !more ){
			var more = {};
		}
		more['is_error'] = 0;
		
		return send(rsp, more);
	},
		
	error: function(code, msg, more) {
		
		if ( !more ){
			var more = {};
		}
		more['is_error'] = 1;
				
		var out = {
			
			'error':[
				{
					'code':code,
					'error':msg,
					'message':msg
				}
			],
		};
		
		// TODO: log this here now
		
		return send(out, more);
	},
	
	
};

function send(rsp, more){
	
	if ( more['is_error'] == 1){
		rsp['stat'] = 'error';
	} else {
		rsp['stat'] = 'ok';
	}
	
	// TODO: log stuff
		
	return rsp;
};
