import { render, screen } from '@/lib/test-utils'

import LinkWrapper from '../sidebar-selected'

describe('SidebarSelected', () => {
  test('should render the selected sidebar item', () => {
    render(<LinkWrapper href='/test'>Test</LinkWrapper>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
