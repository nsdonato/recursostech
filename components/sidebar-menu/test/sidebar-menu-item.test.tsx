import { Item } from '@/components/sidebar-menu/sidebar-types'
import { render } from '@/lib/test-utils'

import { SidebarMenuItem } from '../sidebar-menu-item'

describe('SidebarMenuItem', () => {
  test('renders correctly', () => {
    const item: Item = [
      {
        url: '/',
        name: 'Home',
      },
    ]

    const { getByText } = render(<SidebarMenuItem items={item} />)
    expect(getByText('Home')).toBeInTheDocument()
  })
})
