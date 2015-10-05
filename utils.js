var utils = {};
var typecheck = require('./lib/typecheck');
utils.is = typecheck.is;
utils.type = typecheck.type;
utils.wrapURL = require('./lib/wrapURL');

module.exports = utils;
