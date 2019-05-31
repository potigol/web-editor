var express = require('express');
var router = express.Router();

// brutgol compile
var brutgol = require('../libs/brutgol');

router.post('/run', function(req, res, next) {
	var code = req.body.code;

	if(code.trim().length > 2){
		brutgol(code).then(result => {
	  		res.send({out: result});
		});
	}
	else res.send({out: 'Error! nothing to compile'}); 
});

module.exports = router;