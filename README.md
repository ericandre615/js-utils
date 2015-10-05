# Javascript Utilities
## basic utility functions for javascript

```
var utils = require('./utils');

type checking
`utils.is(thingToCheck, type)`
```

where `type` is a case-insensitive string

available types to check are

```
'string'
'number'
'boolean'
'function'
'array'
'object'
'buffer' (Uint8Array)
'date'
```
returns `true` if it is of type and `false` if not

get type of
`utils.type(obj)`

Example:
```
var arr = [1,2,3,4];
utils.type(arr);

// returns '[object Array]'
```

