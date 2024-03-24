import { render, screen } from '@testing-library/react'

import { Contributors } from '../contributors'

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
            login: 'nsdonato',
            id: 7875216,
            node_id: 'MDQ6VXNlcjc4NzUyMTY=',
            avatar_url: 'https://avatars.githubusercontent.com/u/7875216?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nsdonato',
            html_url: 'https://github.com/nsdonato',
            followers_url: 'https://api.github.com/users/nsdonato/followers',
            following_url:
              'https://api.github.com/users/nsdonato/following{/other_user}',
            gists_url: 'https://api.github.com/users/nsdonato/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nsdonato/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nsdonato/subscriptions',
            organizations_url: 'https://api.github.com/users/nsdonato/orgs',
            repos_url: 'https://api.github.com/users/nsdonato/repos',
            events_url:
              'https://api.github.com/users/nsdonato/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nsdonato/received_events',
            type: 'User',
            site_admin: false,
            contributions: 35,
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
