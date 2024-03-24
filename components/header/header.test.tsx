import { render } from '@/lib/test-utils'

import { Header } from './header'

describe('<Header />', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Header
        title='My Title'
        description={['My Description', 'My Description 2']}
      />
    )
    expect(getByText('My Title')).toBeInTheDocument()
    expect(getByText('My Description')).toBeInTheDocument()
    expect(getByText('My Description 2')).toBeInTheDocument()
  })
})
