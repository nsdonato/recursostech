import { render } from '@/lib/test-utils'

import Logo from './logo'

describe('Logo', () => {
	test('renders correctly', () => {
		const { container } = render(<Logo />)
		expect(container).toBeInTheDocument()
	})
})
