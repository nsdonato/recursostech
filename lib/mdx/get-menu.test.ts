import { getMenu } from './get-menu'

const mockData = {
  data: {
    contributors: [{ github_username: 'nsdonato' }],
    menu: [
      { name: 'Inicio', items: [] },
      {
        name: 'Recursos',
        items: [
          {
            name: 'Front',
            items: [
              {
                name: 'Deploys',
                url: '/docs/frontend/deploys',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
              {
                name: 'Colores',
                url: '/docs/frontend/colors_palette',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
              {
                name: 'Iconos',
                url: '/docs/frontend/icons',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
              {
                name: 'Fuentes',
                url: '/docs/frontend/fonts',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
              {
                name: 'Forms',
                url: '/docs/frontend/forms',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
              {
                name: 'Streamers',
                url: '/docs/frontend/streamers',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
            ],
          },
          {
            name: 'Back',
            items: [
              {
                name: 'Deploys',
                url: '/docs/backend/deploys',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
              {
                name: 'Streamers',
                url: '/docs/backend/streamers',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
            ],
          },
          {
            name: 'Testing',
            items: [
              {
                name: 'Herramientas',
                url: '/docs/testing/tools',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
            ],
          },
          {
            name: 'VSCode',
            items: [
              {
                name: 'Extensiones',
                url: '/docs/vscode/extensions',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
            ],
          },
          {
            name: 'Conferencias',
            items: [
              {
                name: 'Conferencias',
                url: '/docs/conferences/conferences',
                createdAt: '2024-01-14T00:00:00Z',
                updatedAt: '2024-01-14T00:00:00Z',
              },
            ],
          },
        ],
      },
    ],
  },
}

// TODO: mock correctly getMenu function
describe('getMenu', () => {
  test.skip('returns correct data', async () => {
    const { data } = await getMenu()
    expect(data).toEqual(mockData.data)
  })
})
