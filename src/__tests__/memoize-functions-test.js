import memoizeFunctions from '../memoize-functions'

jest.unmock('../memoize-functions')
jest.unmock('memoizee')


describe('memoizeFunctions()', () => {
  let subject
  let obj

  describe('when called without options', () => {
    beforeEach(() => {
      obj = {
        info: () =>
          ({ output: 'I beg your pardon' }),
        log: (message = 'Howdy o/') =>
          ({ output: message }),
        warn: ({ message = 'Hey!' } = {}) =>
          ({ output: message }),
        text:
          ({ output: 'String' }),
      }
      subject = memoizeFunctions(obj)
    })

    it('returns a new object', () => {
      expect(subject).not.toBe(obj)
    })

    it('keeps non function attributes', () => {
      expect(subject.text).toBe(obj.text)
      expect(subject.text.output).toBe(obj.text.output)
    })

    it('memoizes function attributes', () => {
      expect(subject.info()).toBe(subject.info())
      expect(subject.log()).toBe(subject.log())
      expect(subject.warn()).toBe(subject.warn())
    })
  })

  describe('when called specifying attributes to be memoized', () => {
    beforeEach(() => {
      obj = {
        info: () =>
          ({ output: 'I beg your pardon' }),
        log: (message = 'Howdy o/') =>
          ({ output: message }),
        warn: ({ message = 'Hey!' } = {}) =>
          ({ output: message }),
        text:
          ({ output: 'String' }),
      }
      subject = memoizeFunctions(obj, 'text', 'log', 'warn')
    })

    it('memoizes function specified function attributes', () => {
      expect(subject.log()).toBe(subject.log())
      expect(subject.warn()).toBe(subject.warn())
    })

    it('keeps non function attributes', () => {
      expect(subject.text).toBe(obj.text)
      expect(subject.text.output).toBe(obj.text.output)
    })

    it('does not memoize non specified function attributes', () => {
      expect(subject.info()).not.toBe(subject.info())
    })
  })
})
