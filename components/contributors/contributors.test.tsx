import { render, screen } from '@testing-library/react'

import { Contributor } from '@/lib/mdx/mdx-utils'

import { Contributors } from './contributors'

describe('<Contributors />', () => {
	test('renders correctly', () => {
		const contributors: Contributor[] = [{ github_username: 'nsdonato' }]

		render(<Contributors contributors={contributors} />)
		const avatar = screen.getByRole('img', {
			name: /nsdonato/i,
		})

		expect(screen.getByText('Colaboradores')).toBeInTheDocument()
		expect(avatar).toBeInTheDocument()
	})
})
