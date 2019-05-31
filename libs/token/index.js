var token = require('token');
var config = require('./config.json');

// set token
token.defaults.secret = process.env.seed || config.seed;
token.defaults.timeStep = config.time;

// standard
module.exports.generate = (id) => {return token.generate(id)};
module.exports.valid = (id, userToken) => {return token.verify(id, userToken)};