var mongoose = require('mongoose');
var Twit = require('twit')
var configAuth = require('../config/auth');
var configDB = require('../config/database');

mongoose.connect(configDB.url);

var User = require('../app/include/lib_users');
var Tweet = require('../app/include/lib_tweets');

User.find(processUsers);

var jobs = 0;

function processUsers(err, users) {
	if (err) return console.error(err);

	//console.log(Object.keys(users).length);
	
	for(var user in users){
  	  
		var T = new Twit({
			consumer_key:         configAuth.twitterAuth.consumerKey,
			consumer_secret:      configAuth.twitterAuth.consumerSecret,
			access_token:         users[user].twitter.token,
			access_token_secret:  users[user].twitter.tokenSecret
		});
				
		var args = {
			user_id: users[user].twitter.id,
			count: 200,
		};

		T.get('statuses/user_timeline', args, processTweets );	
	};

}

function processTweets(err, statuses) {
	
	jobs = jobs + Object.keys(statuses).length;
	
	for(var tweet in statuses){
		var query = {tweet_id:statuses[tweet].id_str}
		var updateTweet = {};
		updateTweet.tweet_id = statuses[tweet].id_str;
		updateTweet.tweet = statuses[tweet];
		 
		Tweet.findOneAndUpdate(query, updateTweet, {upsert:true}, function(err, doc) {
			if (err) return console.error(err);
			console.log("Updating: "+ doc.tweet_id);
			
			// manage the closing of the db connection when everything is done, maybe?
			jobs = jobs - 1;
			if ( jobs == 0 ){
				mongoose.connection.close();
			}
		});
	};	
				
}