var express = require('express');
var path = require('path');
var router = express.Router();
var db = require('../db');

var artistsController = require('../controllers/artists');

router.route('/')
	.get(artistsController.all)
	.post(artistsController.post);


router.route('/:id')
	.get(artistsController.getById)
	.put(artistsController.put)
	.delete(artistsController.delete);


module.exports = router;