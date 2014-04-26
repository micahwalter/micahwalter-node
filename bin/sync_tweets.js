var mongoose = require('mongoose');
var Twit = require('twit')
var configAuth = require('../config/auth');
var configDB = require('../config/database');

mongoose.connect(configDB.url);

var User = require('../app/include/lib_users');
var Tweet = require('../app/include/lib_tweets');

User.find(function (err, users) {
	if (err) return console.error(err);
	
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
		
		T.get('statuses/user_timeline', args,  function (err, statuses) {
			for(var tweet in statuses){
				console.log(statuses[tweet].id_str + ": " + statuses[tweet].text);  
			};	
			console.log("Done");	
		});	

	};	
	mongoose.connection.close();
});