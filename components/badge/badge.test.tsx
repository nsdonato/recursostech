import { render, screen } from '@/lib/test-utils'

import { Badge } from './badge'

describe('<Badge />', () => {
  const today = new Date().toISOString()
  const yesterday = new Date(Date.now() - 86400000).toISOString()
  const lastWeek = new Date(Date.now() - 604800000).toISOString()
  console.log(today)
  console.log(yesterday)
  console.log(lastWeek)
  test('renders the new badge', () => {
    const { getByText } = render(
      <Badge createdAt={today} updatedAt={yesterday} />
    )
    expect(getByText('new')).toBeInTheDocument()
  })

  test('renders the updated badge', () => {
    const { getByText } = render(
      <Badge createdAt={yesterday} updatedAt={yesterday} />
    )
    expect(getByText('updated')).toBeInTheDocument()
  })

  test('renders the updated badge', () => {
    render(<Badge createdAt={yesterday} updatedAt={lastWeek} />)

    expect(screen.queryByTestId('badge')).not.toBeInTheDocument()
  })

  test('renders nothing', () => {
    const { queryByText } = render(<Badge createdAt={''} updatedAt={''} />)
    expect(queryByText('new')).not.toBeInTheDocument()
    expect(queryByText('updated')).not.toBeInTheDocument()
  })
})
