
/**
 * Module dependencies.
 */
console.log('Initializing dependences...');
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
console.log('Initializing enviorments...');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

console.log('Setting development');
// development only
if ('development' == app.get('env')) {
	console.log('Setting development...');
    app.use(express.errorHandler());
}

console.log('Getting routes...');
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

console.log('Starting server...');
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
