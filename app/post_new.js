var marked = require('marked');

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    _ = require('lodash');


exports.render = function(req, res, passport) {
    res.render('post_new', {
		user : req.user, 
		title: 'New Post' 
	});
};

/**
 * Create a post
 */
exports.create = function(req, res) {
    var post = new Post();
    post.user = req.user;
	post.title = req.body.title;
	post.content = marked(req.body.content);

    post.save(function(err) {
        if (err) {
            return res.send('/', {
                errors: err.errors,
                post: post
            });
        } else {
            return res.redirect('/p/' + post.id);
        }
    });
};

