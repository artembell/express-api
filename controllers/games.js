var Games = require('../models/games');

exports.getAll = function(req, res){
	Games.getAll(function(err, docs){
		if(err){
			console.log(err)
			return sendStatus(500);
		}
		res.send(docs);
	});
}

exports.add = function(req, res){
	Games.add(
		{
			name: req.body.name,
			categories: req.body.categories,
			ageBound: req.body.ageBound
		},
		function(err, result){
			if(err){
				console.log(err);
				return sendStatus(500);
			}
			res.send(result);
		}
	);
}