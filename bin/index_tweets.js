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

var mongoose = require('mongoose');
var configDB = require('../config/database');

mongoose.connect(configDB.url);

var Tweet = require('../app/include/lib_tweets');

Tweet.find(processTweets);

var elasticSearchClient = new ElasticSearchClient(serverOptions);

function processTweets(err, statuses) {
	
	for(var tweet in statuses){
		var theTweet = statuses[tweet].tweet;
		theTweet.tweet_id = statuses[tweet].id_str;
		
		elasticSearchClient.index('test', 'test2', theTweet)
		    .on('data', function(data) {
		        console.log(data)
		}).exec();
	}

};