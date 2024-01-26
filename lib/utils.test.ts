import { BadgeType } from '@/components/badge/badge'

import { cn, getBadgeType } from './utils'

describe('utils', () => {
	describe('cn', () => {
		test('returns correct classnames', () => {
			expect(cn('foo', 'bar')).toBe('foo bar')
		})
	})

	describe('getBadgeType', () => {
		test('returns correct badge type', () => {
			const today = new Date()
			let yesterday = new Date()
			const nextWeek = new Date(today)

			yesterday.setDate(yesterday.getDate() - 1)
			nextWeek.setDate(today.getDate() + 7)

			expect(getBadgeType(today, today)).toBe(BadgeType.new)
			expect(getBadgeType(yesterday, yesterday)).toBe(BadgeType.updated)
			expect(getBadgeType(nextWeek, nextWeek)).toBe(BadgeType.none)
		})
	})
})
