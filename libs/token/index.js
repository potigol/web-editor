var token = require('token');
var config = require('./config.json');

// set token
token.defaults.secret = process.env.seed || config.seed;
token.defaults.timeStep = config.time;

// standard
module.exports.generate = () => {return token.generate(config.secret)};
module.exports.valid = (_token) => {return token.verify(config.secret, _token)};