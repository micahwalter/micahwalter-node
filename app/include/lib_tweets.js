var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// data model for tweets
var TweetSchema = new Schema({
    archived: {
        type: Date,
        default: Date.now
    },
    content: {
        type: Object
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

// ************************************************************** //

TweetSchema.statics.findByID = function (id, cb, err) {
  this.findOne({ '_id': id }, cb).populate('user', 'twitter');
}

// create the model for posts and expose it to our app
module.exports = mongoose.model('Tweet', TweetSchema);