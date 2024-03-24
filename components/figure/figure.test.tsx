import { render } from '@testing-library/react'

import { Figure } from './figure'

describe('Figure', () => {
  test('renders correctly with image or svg', () => {
    const { container } = render(
      <Figure
        cover={{
          src: '/frontend/vercel.svg',
          width: 100,
          height: 100,
        }}
        placeholder='vercel'
      />
    )
    expect(container).toBeInTheDocument()
  })
})
