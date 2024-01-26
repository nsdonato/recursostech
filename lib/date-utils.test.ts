import { isUpdated, isToday } from './date-utils'

describe('date-utils', () => {
	describe('isToday', () => {
		test('returns true if date is today', () => {
			const today = new Date()
			expect(isToday(today)).toBe(true)
		})

		test('returns false if date is not today', () => {
			const today = new Date()
			const yesterday = new Date(today)
			yesterday.setDate(today.getDate() - 1)
			expect(isToday(yesterday)).toBe(false)
		})
	})

	describe('isUpdated', () => {
		test('returns true if date is this week but not today', () => {
			const today = new Date()
			const tomorrow = new Date(today)
			tomorrow.setDate(today.getDate() + 1)
			expect(isUpdated(tomorrow)).toBe(true)
		})

		test('returns false if date is not this week', () => {
			const today = new Date()
			const nextWeek = new Date(today)
			nextWeek.setDate(today.getDate() + 7)
			expect(isUpdated(nextWeek)).toBe(false)
		})

		test('returns true if updated date is today', () => {
			const updatedToday = new Date()
			expect(isUpdated(updatedToday)).toBe(true)
		})
	})
})
