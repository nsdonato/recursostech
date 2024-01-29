import { getMenuItem } from './get-menu-item'

const mockData = {
  title: 'Titulo',
  description: 'Descripción sobre el titulo',
  contributors: [{ github_username: '' }],
  submenu: [
    {
      imgPlaceholder: '',
      titleCard: '',
      cover: { src: '', width: 190, height: 80 },
      links: [
        { url: 'https://ejemplo.com/', type: 'Web' },
        { url: 'https://twitter.com/ejemplo', type: 'X' },
        { url: 'https://twitch.com/ejemplo', type: 'Twitch' },
        {
          url: 'https://vscode-marketplace.com/ejemplo',
          type: 'Market',
        },
      ],
      videos: [
        {
          url: 'https://youtu.be/ZZ5LpwO-An4?si=GyPJedge0eUFju1i',
          tooltip: 'titulo tooltip 🥚👀👇🏻?',
        },
      ],
      createdAt: '2024-01-14T00:00:00Z',
      updatedAt: '2024-01-14T00:00:00Z',
    },
  ],
}

describe('getMenuItem', () => {
  test('returns the correct data', async () => {
    const { data } = await getMenuItem(['/docs/doc_template_general'])

    expect(data).toEqual(mockData)
  })
})
