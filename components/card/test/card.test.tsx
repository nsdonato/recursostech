import { render, screen } from '@testing-library/react'

import { Card } from '../card'
import { CardItem } from '../card-types'

const itemMock: CardItem = {
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
      type: 'Web',
    },
  ],
  videos: [
    {
      url: 'https://vercel.com',
      tooltip: 'Vercel',
    },
  ],
}

describe('<Card />', () => {
  test('renders correctly', () => {
    render(<Card item={itemMock} />)

    // TODO: add testId to Icon component so we can use it here
    // const svg = screen.getByRole('svg')
    // expect(svg).toBeInTheDocument()
    expect(screen.getByText('Web')).toBeInTheDocument()
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('vercel placeholder')).toBeInTheDocument()
  })

  test('renders image placeholder when has no cover', () => {
    const itemWithoutCover = {
      ...itemMock,
      cover: {
        ...itemMock.cover,
        src: '',
      },
    }
    render(<Card item={itemWithoutCover} />)

    expect(screen.queryByText('vercel placeholder')).toBeInTheDocument()
  })
})
