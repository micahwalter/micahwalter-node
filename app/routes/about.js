module.exports = function(app) {
	    
    // About page route
    var about = require('../controllers/about');
    app.get('/about', about.render);

};
