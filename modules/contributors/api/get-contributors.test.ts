import { getContributorsFromGitHub } from './get-contributors'

describe.skip('getContributorsFromGitHub', () => {
  test('returns correct data', async () => {
    const mockData = [
      {
        id: 1,
        name: 'nsdonato',
        avatar: 'https://example.com/avatar1.jpg',
        profile: 'https://example.com/profile1',
        contributions: 0,
      },
    ]
    // @ts-ignore
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

    const result = await getContributorsFromGitHub()
    expect(result).toEqual(mockData)
  })
})
