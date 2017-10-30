var MongoClient = require('mongodb').MongoClient;

var state = {
	db: null
}

exports.connect = function(url, callback){
	if(state.db){
		return callback();
	}

	MongoClient.connect(url, function(err, database){
		if(err){
			return callback(err);
		}

		state.db = database;
		callback(); 
	})
}

exports.get = function(){
	return state.db;
}