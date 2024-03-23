import { render } from '@/lib/test-utils'

import { WebLink } from './web-link'

describe('WebLink', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <WebLink
        href='https://example.com'
        className='flex gap-1'
        eventName='open website'>
        Example
      </WebLink>
    )
    expect(getByText('Example')).toBeInTheDocument()
  })
})
