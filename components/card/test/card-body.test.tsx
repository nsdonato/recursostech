import { render, screen } from '@/lib/test-utils'

import { CardBody } from '../card-body'

describe('<CardBody />', () => {
	test('renders correctly as svg', () => {
		const cover = {
			src: '/frontend/vercel.svg',
			width: 100,
			height: 100,
		}
		const imgPlaceholder = 'test'
		const { queryByText } = render(
			<CardBody cover={cover} imgPlaceholder={imgPlaceholder} />
		)
		expect(queryByText('test')).not.toBeInTheDocument()
	})

	test('renders correctly as img but without placeholder', () => {
		const cover = {
			src: '/frontend/vercel.svg',
			width: 100,
			height: 100,
		}
		const { container } = render(<CardBody cover={cover} imgPlaceholder={''} />)
		const img = screen.getByRole('img')
		expect(img).toBeInTheDocument()
		expect(container).toBeInTheDocument()
	})
})
