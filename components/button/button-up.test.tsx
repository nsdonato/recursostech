import { render } from '@/lib/test-utils'

import { ButtonUp } from './button-up'

describe('ButtonUp', () => {
  test('renders correctly', () => {
    const { container } = render(<ButtonUp />)
    expect(container).toBeInTheDocument()
  })
})
