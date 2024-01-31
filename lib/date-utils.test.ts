import { isToday } from './date-utils'

describe('date-utils', () => {
  const today = new Date()

  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  const lastWeek = new Date(today)
  lastWeek.setDate(today.getDate() - 7)

  describe('isToday', () => {
    test('returns true if createdAt is today', () => {
      expect(isToday(today)).toBe(true)
    })

    test('returns false if createdAt is not today', () => {
      expect(isToday(yesterday)).toBe(false)
    })
  })
})
