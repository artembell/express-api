var express = require('express');
var router = express.Router();

var gamesController = require('../controllers/games');

router.route('/')
	.get(gamesController.getAll)
	.post(gamesController.add);

module.exports = router;