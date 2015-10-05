var typecheck = (function() {
  'use strict';

  var duckType = Object.prototype.toString;

  var types = {
    'object': '[object Object]',
    'array': '[object Array]',
    'string': '[object String]',
    'number': '[object Number]',
    'boolean': '[object Boolean]',
    'function': '[object Function]',
    'buffer': '[object Uint8Array]',
    'date': '[object Date]'
  };

  function _is(obj, type) {
    if(duckType.apply(obj) === types[type.toLowerCase()]) {
      return true;
    } else {
      return false;
    }
    return;
  }

  return {
    is: _is
  };
})();

if(typeof module !== undefined && module.exports) {
  module.exports = typecheck;
}
