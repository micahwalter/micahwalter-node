var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// data model for links
var LinkSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    link: {
        type: String,
        default: '',
        trim: true
    },
	description: {
		type: String,
		default: '',
		tring: true
	},
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

// ************************************************************** //

LinkSchema.statics.findByID = function (id, cb, err) {
	this.findOne({ '_id': id }, cb).populate('user', 'twitter');
}

LinkSchema.statics.findByUserID = function findByUserID(id, page, cb, err) {
	this.find({ 'user': id }).sort({'created':-1}).skip(10*(page-1)).limit(10).exec(cb); 
}

LinkSchema.statics.countByUserID = function countByUserID(id, page, cb, err){
	this.count({'user':id}).exec(cb);
}

module.exports = mongoose.model('Link', LinkSchema);