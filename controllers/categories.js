var Categories = require('../models/categories');

exports.getAll = function(req, res){
	Categories.getAll(function(err, docs){
		if(err){
			console.log(err)
			return sendStatus(500);
		}
		res.json(docs);
	});
}

exports.add = function(req, res){
	Categories.add(
		{
			name: req.body.name,
			description: req.body.description,
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