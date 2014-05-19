var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// data model for tweets
var TweetSchema = new Schema({
    archived: {
        type: Date,
        default: Date.now
    },
	tweet_id: {
		type: String,
		unique: true
	},
    tweet: {
        type: Object
    },
});

// ************************************************************** //

TweetSchema.statics.findByID = function (id, cb, err) {
  this.findOne({ '_id': id }, cb).populate('user', 'twitter');
}

TweetSchema.statics.findByUserID = function(username, cb, err){
	this.find({'tweet.user.screen_name':username}, null, {sort: {'tweet.id':-1}}, cb);
}

// create the model for posts and expose it to our app
module.exports = mongoose.model('Tweet', TweetSchema);