var db = require('../db');

exports.getAll = function(cb){
	db.get().collection('games').find().toArray(function(err, docs){
		cb(err, docs);
	});
}

exports.add = function(model, cb){
	db.get().collection('games').insertOne(
		model,
		function(err, result){
			cb(err, result);
		}
	);
}