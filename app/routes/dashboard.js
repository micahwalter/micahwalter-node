var authorization = require('./middlewares/authorization');

module.exports = function(app) {
	    
    // Dashboard route
    var dashboard = require('../controllers/dashboard');
    app.get('/dashboard', authorization.isLoggedIn, dashboard.render);

};