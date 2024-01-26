import { render } from '@/lib/test-utils'

import { Badge, BadgeType } from './badge'

describe('<Badge />', () => {
	const today = new Date().toString()
	test('renders the new badge', () => {
		const { getByText } = render(<Badge createdAt={today} updatedAt={today} />)
		expect(getByText('new')).toBeInTheDocument()
	})
	test('renders the updated badge', () => {
		const yesterday = new Date()
		yesterday.setDate(yesterday.getDate() - 1)

		const { getByText } = render(
			<Badge
				createdAt={yesterday.toString()}
				updatedAt={yesterday.toString()}
			/>
		)
		expect(getByText('updated')).toBeInTheDocument()
	})
	test('renders nothing', () => {
		const { queryByText } = render(<Badge createdAt={''} updatedAt={''} />)
		expect(queryByText('new')).not.toBeInTheDocument()
		expect(queryByText('updated')).not.toBeInTheDocument()
	})
})
