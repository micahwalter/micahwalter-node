var express = require("express");
var swig  = require('swig');

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
	
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');
	
	// passport
	app.use(express.session({ secret: configAuth.secret })); 
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash()); 

});

swig.setDefaults({ cache: false });

require('./app/routes.js')(app, passport);

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

