import { render } from '@/lib/test-utils'

import { Header } from './header'

describe('<Header />', () => {
	test('renders correctly', () => {
		const { getByText } = render(
			<Header title='My Title' description='My Description' />
		)
		expect(getByText('My Title')).toBeInTheDocument()
		expect(getByText('My Description')).toBeInTheDocument()
	})
})
