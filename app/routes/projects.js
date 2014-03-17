module.exports = function(app) {
	    
	var projects = require('../controllers/projects');
	app.get('/projects', projects.render);
	
};