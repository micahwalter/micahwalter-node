var mongoose = require('mongoose');
var configDB = require('../config/database.js');

mongoose.connect(configDB.url);
	
