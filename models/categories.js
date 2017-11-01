var db = require('../db');

exports.getAll = function(cb){
	db.get().collection('categories').find().toArray(function(err, docs){
		cb(err, docs);
	});
}

exports.add = function(model, cb){
	db.get().collection('categories').insertOne(
		model,
		function(err, result){
			cb(err, result);
		}
	);
}