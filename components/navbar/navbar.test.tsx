import { act, render } from '@/lib/test-utils'

import Navbar from './navbar'

describe('<Navbar />', () => {
	test('renders correctly', () => {
		const { container } = render(<Navbar />)
		expect(container).toBeInTheDocument()
	})
})
