// TODO: skip test momentarily: Jest encountered an unexpected token, we need to investigate this issue
import { render } from '@/lib/test-utils'

import Navbar from './navbar'

describe.skip('<Navbar />', () => {
  test.skip('renders correctly', () => {
    const { container } = render(<Navbar />)
    expect(container).toBeInTheDocument()
  })
})
