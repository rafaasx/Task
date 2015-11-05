var express = require('express');
var router = express.Router();

/* GET index listing. */
router.get('/', function (req, res) {
	res.send('index');
});

module.exports = router;

