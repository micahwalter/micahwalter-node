// config/database.js

	
if (process.env.MONGOHQ_URL) {
	module.exports = {
		'url' : process.env.MONGOHQ_URL
	};
} else {
	module.exports = {
		'url' : 'mongodb://localhost/micahwalterlocal'
	};
}
	

