module.exports = function(app) {
	    
    // Profile route
    var profile = require('../controllers/profile');
    app.get('/@:username', profile.render);
	
};