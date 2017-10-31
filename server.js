var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var colors = require('colors');
colors.setTheme({
	err: 'red',
	useful: 'cyan',
	info: 'green',
	warn: 'yellow',
	main: 'inverse',
});

var db = require('./db');

var artist = require('./routes/artist');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/artist', artist);


app.get('/users', function(req, res){
	res.json([{
		id: 1,
		username: "Linkin Park"
	}, {
		id: 2,
		username: "Nothing But Thieves"
	}]);
});

db.connect('mongodb://localhost:27017/artists', function(err){
	if(err){
		return console.log(err);
	}

	app.listen(port, function(){
		console.log('App listening on port ' + port);
		//console.log('hello'.blue);

	});
});

function errorHandler(err, req, res, next) {
  res.status(500);
  res.send("the shit has happened to our server");
}

app.use(errorHandler);
