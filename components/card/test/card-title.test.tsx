import { render } from '@/lib/test-utils'

import { CardTitle } from '../card-title'

describe('<CardTitle />', () => {
	test('renders correctly', () => {
		const title = 'test'
		const { getByText } = render(<CardTitle title={title} />)
		expect(getByText('test')).toBeInTheDocument()
	})
})
