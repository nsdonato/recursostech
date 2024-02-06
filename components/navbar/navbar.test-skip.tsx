// TODO: skip test momentarily
import { act, render } from '@/lib/test-utils'

import Navbar from './navbar'

describe('<Navbar />', () => {
  test.skip('renders correctly', () => {
    const { container } = render(<Navbar />)
    expect(container).toBeInTheDocument()
  })
})
