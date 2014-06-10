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

module.exports = mongoose.model('Link', LinkSchema);