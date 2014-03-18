var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// data model for an article
var PostSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


// ************************************************************** //

PostSchema.statics.findByID = function (id, cb, err) {
  this.findOne({ '_id': id }, cb).populate('user', 'twitter.username');
}

// ************************************************************** //
// create the model for posts and expose it to our app
module.exports = mongoose.model('Post', PostSchema);