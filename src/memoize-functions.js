import memoize from 'memoizee'

const memoizeOpts = {
  normalizer: (args) => (args[0] ? JSON.stringify(args[0]) : 'id'),
}

/* eslint-disable no-restricted-syntax */

const memoizeFunctions = (obj, ...attributeNames) => {
  const memoizedObj = {}

  for (const prop in obj) {
    if (
      typeof obj[prop] === 'function'
      && (attributeNames.length > 0 ? (attributeNames.indexOf(prop) >= 0) : true)
    ) {
      memoizedObj[prop] = memoize(obj[prop], memoizeOpts)
    }
  }

  return { ...obj, ...memoizedObj }
}

export default memoizeFunctions
