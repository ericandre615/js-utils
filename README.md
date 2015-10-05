# Javascript Utilities
## basic utility functions for javascript

```
var utils = require('./utils');

// type checker
utils.is(thingToCheck, type)
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
