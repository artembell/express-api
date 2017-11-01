var express = require('express');
var router = express.Router();

var categoryController = require('../controllers/categories');

router.route('/')
	.get(categoryController.getAll)
	.post(categoryController.add);

module.exports = router;