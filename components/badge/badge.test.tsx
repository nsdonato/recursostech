import { render, screen } from '@/lib/test-utils'

import { Badge } from './badge'

describe('<Badge />', () => {

	const today = "2024-01-26T15:00:00.000Z"
	const yesterday = "2024-01-25T15:00:00.000Z"
	const lastWeek = "2024-01-18T15:00:00.000Z"

	test('renders the new badge', () => {
		const { getByText } = render(<Badge createdAt={today} updatedAt={yesterday} />)
		expect(getByText('new')).toBeInTheDocument()
	})

	test('renders the updated badge', () => {
		const { getByText } = render(
			<Badge
				createdAt={yesterday}
				updatedAt={yesterday}
			/>
		)
		expect(getByText('updated')).toBeInTheDocument()
	})

	test('renders the updated badge', () => {
		render(
			<Badge
				createdAt={yesterday}
				updatedAt={lastWeek}
			/>
		)

		expect(screen.queryByTestId('badge')).not.toBeInTheDocument();
	})

	test('renders nothing', () => {
		const { queryByText } = render(<Badge createdAt={''} updatedAt={''} />)
		expect(queryByText('new')).not.toBeInTheDocument()
		expect(queryByText('updated')).not.toBeInTheDocument()
	})
})
