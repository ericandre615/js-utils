var utils = {};
var typecheck = require('./lib/typecheck');
utils.is = typecheck.is;
utils.type = typecheck.type;
utils.wrapURL = require('./lib/wrapURL');
utils.xor = require('./lib/xor');
utils.xnor = require('./lib/xnor.js');

module.exports = utils;
