/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Talk = mongoose.model('Talk'),
    _ = require('lodash');


/**
 * Find talk by id
 */
exports.talk = function(req, res, next, id) {
    Talk.load(id, function(err, article) {
        if (err) return next(err);
        if (!talk) return next(new Error('Failed to load talk ' + id));
        req.talk = talk;
        next();
    });
};

/**
 * Create a talk
 */
exports.create = function(req, res) {
    var talk = new Talk(req.body);
    talk.user = req.user;

    talk.save(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                talk: talk
            });
        } else {
            res.jsonp(talk);
        }
    });
};

/**
 * Update a talk
 */
exports.update = function(req, res) {
    var talk = req.talk;

    talk = _.extend(talk, req.body);

    talk.save(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                talk: talk
            });
        } else {
            res.jsonp(talk);
        }
    });
};

/**
 * Delete a talk
 */
exports.destroy = function(req, res) {
    var talk = req.talk;

    talk.remove(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                talk: talk
            });
        } else {
            res.jsonp(talk);
        }
    });
};

/**
 * Show a talk
 */
exports.show = function(req, res) {
    res.jsonp(req.talk);
};

/**
 * List of Talks
 */
exports.all = function(req, res) {
    Talk.find().sort('-created').populate('user', 'name username').exec(function(err, talks) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(talks);
        }
    });
};