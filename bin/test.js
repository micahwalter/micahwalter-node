var mongoose = require('mongoose');
var configDB = require('../config/database.js');

mongoose.connect(configDB.url);
	
console.log("hello node");

process.exit(code=0)