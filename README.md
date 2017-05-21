# timespan-overlap

check if two given timespans overlaps

----
<a href="https://nodei.co/npm/timespan-overlap/"><img src="https://nodei.co/npm/timespan-overlap.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/timespan-overlap.svg?branch=master)](https://travis-ci.org/joaquimserafim/timespan-overlap)[![Coverage Status](https://coveralls.io/repos/github/joaquimserafim/timespan-overlap/badge.svg)](https://coveralls.io/github/joaquimserafim/timespan-overlap)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/timespan-overlap/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.x.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/timespan-overlap/blob/master/package.json#L44)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const overlap = require('timespan-overlap')`

* **overlap([timespan], [timespan to test])** returns a boolean
* **overlap([timespan], [[timespans to test]])** returns an object with the `timespans` as keys and a boolean as value


### example

```js
const overlap = require('timespan-overlap')

overlap([1495381349828, 1495381355955], [1495381355956, 1495381355965])
// returns true
```


#### ISC License (ISC)
