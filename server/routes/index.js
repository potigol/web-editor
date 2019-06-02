var express = require('express');
var router = express.Router();
var brutgol = require('../../libs/potigol');
var token = require('../../libs/token');

router.post('/run', function(req, res, next) {
	const body = req.body,
          code = body.code, 
          userToken = body.token,
	      userId = body.userId;
	
	if(code.trim().length > 2 && token.valid(userId, userToken)) 
		brutgol(code, userToken).then(result => res.send(result));
	else res.send('Error! nothing to compile'); 
});

module.exports = router;