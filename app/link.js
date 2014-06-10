var Link = require('./include/lib_links');

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	Link.findByID(req.params['id'], function (err, link) {
	
	    if ( !link ){
		
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	    
		} else {
			res.render('link', {
				user : req.user,
				link : link,
				title: link.title 
			});
		
		}
	
	});	

	// ************************************************************** //

};