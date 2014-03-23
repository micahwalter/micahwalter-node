var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    email        : String,
	profileComplete : String,
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

// ************************************************************** //

userSchema.statics.findByName = function (username, cb, err) {
  this.findOne({ 'twitter.username': username }, cb);
}

// ************************************************************** //

userSchema.statics.findByID = function (id, cb, err) {
  this.findOne({ '_id': id }, cb);
}

// ************************************************************** //


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
