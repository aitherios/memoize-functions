# memoize-functions
[![npm version](https://img.shields.io/npm/v/memoize-functions.svg?style=flat-square)](https://www.npmjs.com/package/memoize-functions)
[![dependency status](https://img.shields.io/david/team-767/memoize-functions.svg?style=flat-square)](https://david-dm.org/team-767/memoize-functions)
[![build status](https://img.shields.io/travis/team-767/memoize-functions.svg?style=flat-square)](https://travis-ci.org/team-767/memoize-functions)

Create a new object replacing functions with memoized versions.

## Usage

```js
import memoizeFunctions from 'memoize-functions'

let obj = {
  info: () =>
    ({ output: 'I beg your pardon' }),
  log: (message = 'Howdy o/') =>
    ({ output: message }),
  warn: ({ message = 'Hey!' }) =>
    ({ output: message }),
  text:
    ({ output: 'String' }),
}

newObj = memoizeFunctions(obj)
```

Then attributes `info`, `log` and `warn` are replaced by memoized versions
(it supports destructured parameters).
Attribute `text` is kept the same, only functions are mutated.

You can also specify which functions should be mutated:

```js
obj = memoizeFunctions(obj, 'log', 'warn')

obj.log() === obj.log()
obj.info() !== obj.info()
```

Then the attribute `log` and `warn` is replaced with a memoized version but `info` is kept the same.

## Contributing

First of all, **thank you** for wanting to help!

1. [Fork it](https://help.github.com/articles/fork-a-repo).
2. Create a feature branch - `git checkout -b more_magic`
3. Add tests and make your changes
4. Check if tests are ok - `npm test`
5. Commit changes - `git commit -am "Added more magic"`
6. Push to Github - `git push origin more_magic`
7. Send a [pull request](https://help.github.com/articles/using-pull-requests)! :heart: :sparkling_heart: :heart:
