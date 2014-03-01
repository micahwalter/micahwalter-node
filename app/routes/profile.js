var authorization = require('./middlewares/authorization');

module.exports = function(app) {
	    
    // Profile route
    var profile = require('../controllers/profile');
    app.get('/profile', authorization.isLoggedIn, profile.render);

};