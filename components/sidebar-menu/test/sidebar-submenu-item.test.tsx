import { SubmenuItem } from '@/components/sidebar-menu/sidebar-types'
import { render } from '@/lib/test-utils'

import { SidebarSubMenuItem } from '../sidebar-submenu-item'

describe('<SidebarSubmenuItem />', () => {
	test('renders correctly', () => {
		const item: SubmenuItem = {
			name: 'Home',
			items: [],
		}

		const { getByText } = render(<SidebarSubMenuItem submenu={item} />)
		expect(getByText('Home')).toBeInTheDocument()
	})
})
