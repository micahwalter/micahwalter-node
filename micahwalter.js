var express = require("express");
var swig  = require('swig');
var fs = require('fs');

var app = express();

var mongoose = require('mongoose');
var passport = require('passport');
var flash 	 = require('connect-flash');

var configDB = require('./config/database.js');
var configAuth = require('./config/auth.js');

require('./config/passport')(passport);

mongoose.connect(configDB.url);

app.configure(function() {

	// set up express
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.urlencoded())
	app.use(express.json())
	app.set('json spaces', 2);
	
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/app/templates');
	app.use(express.static(__dirname + '/app/public'));
		
	// passport
	app.use(express.session({ secret: configAuth.secret })); 
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash()); 

});

swig.setDefaults({ cache: false });

// Bootstrap routes
require('./routes')(app, passport);


// 500 and 404 stuff here
app.use(function(err, req, res, next) {
    // Treat as 404
    if (~err.message.indexOf('not found')) return next();

    // Log it
    console.error(err.stack);

    // Error page
    res.status(500).render('500', {
        error: err.stack
    });
});

var BrokenLinks = mongoose.model('BrokenLinks', {
        url : String,
        time : { type : Date, default: Date.now }
});

// Assume 404 since no middleware responded
app.use(function(req, res) {
		//     BrokenLinks.create({
		//             url : req.path,
		//             done : false
		//     }, function(err) {
		//         if (err) {
		//         	res.send(err);
		// } else {
		    res.status(404).render('404', {
		        url: req.originalUrl,
		        error: 'Not found'
		    });
	// 	}
	// });
});


// start server
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

