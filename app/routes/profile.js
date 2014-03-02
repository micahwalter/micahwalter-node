module.exports = function(app) {
	    
    // Home route
    var profile = require('../controllers/profile');
    app.get('/@:username', profile.render);
	
};