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
	artisanal_id: {
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

TweetSchema.statics.findByUserID = function findByUserID(username, page, cb, err){
	// ahh this is much better / fix above
	this.find({'tweet.user.screen_name':username}).sort({'tweet.id':-1}).skip(10*(page-1)).limit(10).exec(cb);
}

TweetSchema.statics.findMostRecentByUserID = function findMostRecentByUserID(username, cb, err){
	this.find({'tweet.user.screen_name':username}).sort({'tweet.id':-1}).limit(1).exec(cb);
}

TweetSchema.statics.countByUserID = function countByUserID(username, page, cb, err){
	// ahh this i smuch better / fix above
	this.count({'tweet.user.screen_name':username}).exec(cb);
}
// create the model for posts and expose it to our app
module.exports = mongoose.model('Tweet', TweetSchema);