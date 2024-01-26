import { Item } from '@/components/sidebar-menu/sidebar-types'
import { render } from '@/lib/test-utils'

import { SidebarMenuItem } from '../sidebar-menu-item'

describe('SidebarMenuItem', () => {
	test('renders correctly', () => {
		const item: Item = [
			{
				url: '/',
				updatedAt: '2024-01-14T00:00:00Z',
				createdAt: '2024-01-14T00:00:00Z',
				name: 'Home',
			},
		]

		const { getByText } = render(<SidebarMenuItem items={item} />)
		expect(getByText('Home')).toBeInTheDocument()
	})
})
