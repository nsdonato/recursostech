import { render } from '@/lib/test-utils'

import { SidebarMenu } from '../sidebar-menu'

jest.mock('../../../db/menu', () => ({
  menu: [
    {
      name: 'Menu Item 1',
      items: [
        {
          name: 'Sub Item 1',
          url: '/sub-item-1',
        },
        {
          name: 'Sub Item 2',
          url: '/sub-item-2',
        },
      ],
    },
    {
      name: 'Menu Item 2',
      items: [
        {
          name: 'Sub Item 1',
          url: '/sub-item-1',
        },
        {
          name: 'Sub Item 2',
          url: '/sub-item-2',
        },
      ],
    },
  ],
}))

describe.skip('<SidebarMenu />', () => {
  test('renders without crashing', () => {
    const { container } = render(<SidebarMenu />)
    expect(container).toBeInTheDocument()
  })
})
