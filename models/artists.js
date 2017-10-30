var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

//модель - работа с базой данных, ничего не знает о том, для чего она сделана и где вызывается
//задача модели - взять запрошенные данные из базы и вернуть тому, кто вызвал метод модели

exports.all = function(cb){//когда вызываем метод, он полученные данные кладет в callback, откуда мы их и получаем
	db.get().collection('artists').find().toArray(function(err, docs){//в callback будет ошибка и результат
		cb(err, docs);
	});
}

exports.post = function(model, cb){
	db.get().collection('artists').insertOne(
		model,
		function(err, result){
			cb(err, result);
		}
	);
}

exports.getById = function(id, cb){
	db.get().collection('artists').findOne(
		{_id: ObjectID(id)},
		function(err, doc){
			cb(err, doc);
		}
	)
}

exports.put = function(id, newData, cb){
	db.get().collection('artists').updateOne(
		{_id: ObjectID(id)},
		newData,
		function(err, result){
			cb(err, result);
		}
	);
}

exports.delete = function(id, cb){
	db.get().collection('artists').deleteOne(
		{_id: ObjectID(id)},
		function(err, result){
			cb(err, result);
		}
	);
}