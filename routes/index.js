var express = require('express');
var router = express.Router();
var brutgol = require('../libs/brutgol');
var token = require('../libs/token');

router.post('/run', function(req, res, next) {
	const code = req.body.code, userToken = req.body.token;
	
	if(code.trim().length > 2 && token.valid(userToken)) 
		brutgol(code, userToken).then(result => res.send(result));
	else res.send('Error! nothing to compile'); 
});

module.exports = router;