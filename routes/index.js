var express = require('express');
var router = express.Router();

// brutgol compile
var brutgol = require('../libs/brutgol');

router.post('/run', function(req, res, next) {
	var code = req.body.code;

	console.log(req.body)

	if(code.trim().length > 2){
		brutgol(code).then(result => {
	  		res.send(result);
		});
	}
	else res.send('Error! nothing to compile'); 
});

module.exports = router;