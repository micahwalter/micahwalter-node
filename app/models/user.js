// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
<<<<<<< HEAD
    },
	
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
	
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },	
	
=======
    }
>>>>>>> 1286a660198cb32cae5bdcc8fa091d136627ea4d
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
