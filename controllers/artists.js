var Artists = require('../models/artists');

//контроллер - работа с данными, логика, что отображаем, работает с моделью
//неважно, как и откуда взяты данные

exports.all = function(req, res){
	Artists.all(function(err, docs){
		if(err){
			console.log(err);
			return sendStatus(500);
		}
		res.json(docs);//в docs к нам приходит массив
	});
}

exports.post = function(req, res){
	Artists.post({name: req.body.name}, function(err, result){
		if(err){
			console.log(err);
			return sendStatus(500);
		}
		res.send(result);
	});
}

exports.getById = function(req, res){
	Artists.getById(req.params.id, function(err, doc){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}
		res.send(doc);
	})
}

exports.put = function(req, res){
	Artists.put(req.params.id, {name: req.body.name}, function(err, result){
			if(err){
				console.log(err);
				return sendStatus(500);
			}
			res.send(result);
		}
	);
}

exports.delete = function(req, res){
	Artists.delete(req.params.id, function(err, result){
		if(err){
			console.log(err);
			return sendStatus(500);
		}
		res.send(result);
	})
}