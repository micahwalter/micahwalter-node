var _ = require('lodash');

exports.render = function(req, res) {
    res.render('search_form', {
		title: 'Search' 
	});
};

exports.search = function(req, res) {
    var terms = req.body.terms;
    return res.redirect('/search/' + terms);
};
