var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String,
		profilePhoto : String,
		description	 : String
    },
});


// methods
userSchema.statics.findByName = function (username, cb, err) {
  this.findOne({ 'twitter.username': username }, cb);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
