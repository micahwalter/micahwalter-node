var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SettingsAccountSchema = new Schema({

    settings: {
        type: Object
    },
		
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});

SettingsAccountSchema.statics.findAllByUserID = function findAllByUserID(id, cb, err) {
    this.find({ 'user': id }, cb);
};

module.exports = mongoose.model('SettingsAccount', SettingsAccountSchema);
