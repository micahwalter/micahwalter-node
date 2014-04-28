var ElasticSearchClient = require('elasticsearchclient'),
url = require('url');

var connectionString = url.parse(process.env.SEARCHBOX_SSL_URL);

var serverOptions = {
    host: connectionString.hostname,
    port: connectionString.port,
    secure: false,
    auth: {
        username: connectionString.auth.split(":")[0],
        password: connectionString.auth.split(":")[1]
    }
};

var elasticSearchClient = new ElasticSearchClient(serverOptions);

exports.render = function(req, res) {
	
	// ************************************************************** //
	
	var qryObj = {
		"from" : 0, "size" : 20, // we're going ot need some kind of pagination stuff here, eventually
	    "query":{
	        "query_string":{
	            "query": req.params['query']
	        }
	    }
	};

	elasticSearchClient.search('test', qryObj)
	    .on('data', function (data) {
			var result = JSON.parse(data);
			res.send(data);
			// res.render('search', {
			// 	title : req.params['query'],
			// 	results : result.hits.hits
			// });
	    }).on('error', function (error) {
	            console.log(error)
	    }).exec()
		

	// ************************************************************** //

};