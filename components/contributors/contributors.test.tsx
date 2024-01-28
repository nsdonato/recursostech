import { render, screen } from '@testing-library/react'

import { Contributors } from './contributors'

// HOW TO TEST ASYNC COMPONENTS: https://github.com/vercel/next.js/issues/47131
/**
 * @param {(props: {}) => Promise<JSX.Element>} Component
 * @param {*} props
 * @returns {Promise<()=>JSX.Element>}
 */
async function resolvedComponent(
  Component: (props: {}) => Promise<JSX.Element>,
  props: {}
) {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}

describe('<Contributors />', () => {
  //@ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            login: 'nsdonato',
            avatar_url: 'https://example.com/avatar1.jpg',
            html_url: 'https://example.com/profile1',
            contributions: 0,
          },
        ]),
    })
  )

  test('renders correctly from index', async () => {
    const AsyncRscComponent = await resolvedComponent(Contributors, {
      isIndex: true,
    })
    render(<AsyncRscComponent />)

    const avatar = screen.getByTestId('contributor-nsdonato')

    expect(screen.getByText('Colaboradores')).toBeInTheDocument()
    expect(
      screen.getByText('Gracias a todxs los que aportaron en este proyecto ✨')
    ).toBeInTheDocument()
    expect(avatar).toBeInTheDocument()
  })

  test('renders correctly from slug', async () => {
    const AsyncRscComponent = await resolvedComponent(Contributors, {
      isIndex: false,
      contributors: [
        {
          github_username: 'vamoacodear',
        },
      ],
    })
    render(<AsyncRscComponent />)

    const avatar = screen.getByTestId('contributor-vamoacodear')
    expect(avatar).toBeInTheDocument()
  })
})
