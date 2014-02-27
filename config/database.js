// config/database.js
<<<<<<< HEAD
=======

>>>>>>> 1286a660198cb32cae5bdcc8fa091d136627ea4d
	
if (process.env.MONGOHQ_URL) {
	module.exports = {
		'url' : process.env.MONGOHQ_URL
	};
} else {
	module.exports = {
		'url' : 'mongodb://localhost/micahwalterlocal'
	};
}
	

