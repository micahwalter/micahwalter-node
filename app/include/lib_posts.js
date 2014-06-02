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
	this.findOne({ '_id': id }, cb).populate('user', 'twitter');
}

// ************************************************************** //

PostSchema.statics.findAllByUserID = function findAllByUserID(id, cb, err) {
    this.find({ 'user': id }, cb);
	//this.find({ 'user.screen_name': username }).sort({'created':-1}).skip(10*(page-1)).limit(10).exec(cb);
  
}

PostSchema.statics.findByUserID = function findByUserID(username, page, cb, err) {
  this.find({'user.username':username}, cb);
	//this.find({ 'user.screen_name': username }).sort({'created':-1}).skip(10*(page-1)).limit(10).exec(cb);
  
}

PostSchema.statics.countByUserID = function countByUserID(username, page, cb, err){
	this.count({'user.screen_name':username}).exec(cb);
}

// ************************************************************** //
// create the model for posts and expose it to our app
module.exports = mongoose.model('Post', PostSchema);