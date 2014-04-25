var mongoose = require('mongoose');
var Twit = require('twit')

var configAuth = require('../config/auth');
var configDB = require('../config/database.js');

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
	  })

	  T.get('statuses/user_timeline', { screen_name: users[user].twitter.username, count:100 },  function (err, statuses) {
	  	  
		  for(var tweet in statuses){
			  var newTweet = new Tweet();
			  newTweet.content = statuses[tweet];
		      
			  newTweet.save(function(err) {
		          if (err) {
		              console.log(err);
		          } else {
		              console.log('archived ' + statuses[tweet].id);
		          }
		      });
			  
		  }
	  })
	  
  }
  
});


