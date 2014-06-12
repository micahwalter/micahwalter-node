var Link = require('./include/lib_links');

var mongoose = require('mongoose'),
    _ = require('lodash');


exports.render = function(req, res, passport) {
    res.render('post_new', {
		user : req.user, 
		title: 'New Link' 
	});
};

/**
 * Create a link
 */
exports.create = function(req, res) {
    var link = new Link();
    link.user = req.user;
	link.title = req.body.title;
	link.link = req.body.link;
	link.description = req.body.description;

    link.save(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                link: link
            });
        } else {
            return res.redirect('/l/' + link.id);
        }
    });
};

