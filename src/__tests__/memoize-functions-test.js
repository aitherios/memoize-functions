jest.unmock('../memoize-functions')

import memoizeFunctions from '../memoize-functions'

describe('memoizeFunctions()', () => {
  let subject

  beforeEach(() => {
    subject = {
      info: () =>
        ({ output: 'I beg your pardon' }),
      log: (message = 'Howdy o/') =>
        ({ output: message }),
      warn: ({ message = 'Hey!' }) =>
        ({ output: message }),
      text:
        ({ output: 'String' }),
    }
  })

  it('returns the same object', () => {
    expect(subject).toBe(memoizeFunctions(subject))
  })
})
