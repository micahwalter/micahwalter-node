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
	if ( req.params['page'] ){
		from = ((req.params['page']-1) * 20);
		page = req.params['page']
	} else {
		from = 0;
		page = 1;
	}
	
	var qryObj = {
		"from" : from, "size" : 20, // we're going ot need some kind of pagination stuff here, eventually
	    "query":{
	        "query_string":{
	            "query": req.params['query']
	        }
	    }
	};

	elasticSearchClient.search('main', qryObj)
	    .on('data', function (data) {
			var result = JSON.parse(data);
			//res.send(result);
			res.render('search', {
				title : req.params['query'],
				results : result.hits.hits,
				page : req.params['page'],
				count: result.hits.total,
				next_page: parseInt(page) + 1,
				pages: Math.ceil(result.hits.total / 20),
			});
	    }).on('error', function (error) {
	            console.log(error)
	    }).exec()
		

	// ************************************************************** //

};