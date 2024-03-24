import { render, screen } from '@testing-library/react'

import { LinkType, PageItem } from '@/lib/db-types'

import { Card } from '../card'

describe('<Card />', () => {
  test('renders correctly', () => {
    const itemMock: PageItem = {
      titleCard: 'Card Title',
      infoExtra: undefined,
      cover: {
        src: '/frontend/vercel.svg',
        width: 100,
        height: 100,
      },
      imgPlaceholder: 'vercel placeholder',
      links: [
        {
          url: 'https://vercel.com',
          type: LinkType.Web,
        },
      ],
      videos: [
        {
          url: 'https://vercel.com',
          tooltip: 'Vercel',
        },
      ],
    }

    render(<Card item={itemMock} />)

    expect(screen.getByText('vercel placeholder')).toBeInTheDocument()
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Web')).toBeInTheDocument()
  })
})
