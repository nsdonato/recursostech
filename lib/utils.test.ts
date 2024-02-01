import { cn } from './utils'

describe('utils', () => {
  describe('cn', () => {
    test('returns correct classnames', () => {
      expect(cn('foo', 'bar')).toBe('foo bar')
    })
  })
})
