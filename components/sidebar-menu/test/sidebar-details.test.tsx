import { render, screen } from '@/lib/test-utils'

import { SidebarDetails } from '../sidebar-details'

jest.mock('next/navigation', () => ({
  usePathname: () => '/test',
}))

describe('SidebarDetails', () => {
  test('should render the sidebar details', () => {
    render(<SidebarDetails name='Test'>-</SidebarDetails>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
