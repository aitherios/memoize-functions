import memoizeFunctions from '../memoize-functions'

jest.unmock('../memoize-functions')


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

  it('returns a new object', () => {
    expect(subject).not.toBe(memoizeFunctions(subject))
    expect(subject.text.output).toBe(memoizeFunctions(subject).text.output)
  })
})
