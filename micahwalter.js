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

// Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

app.configure(function() {

	// set up express
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.urlencoded())
	app.use(express.json())
	
	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/app/views');
	
	// passport
	app.use(express.session({ secret: configAuth.secret })); 
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash()); 

});

swig.setDefaults({ cache: false });

// Bootstrap routes
var routes_path = __dirname + '/app/routes';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath)(app, passport);
            }
        } else if (stat.isDirectory() && file !== 'middlewares') {
            walk(newPath);
        }
    });
};
walk(routes_path);

// start server
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

