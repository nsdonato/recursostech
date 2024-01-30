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
              },
              {
                name: 'Colores',
                url: '/docs/frontend/colors_palette',
              },
              {
                name: 'Iconos',
                url: '/docs/frontend/icons',
              },
              {
                name: 'Fuentes',
                url: '/docs/frontend/fonts',
              },
              {
                name: 'Forms',
                url: '/docs/frontend/forms',
              },
              {
                name: 'Streamers',
                url: '/docs/frontend/streamers',
              },
            ],
          },
          {
            name: 'Back',
            items: [
              {
                name: 'Deploys',
                url: '/docs/backend/deploys',
              },
              {
                name: 'Streamers',
                url: '/docs/backend/streamers',
              },
            ],
          },
          {
            name: 'Testing',
            items: [
              {
                name: 'Herramientas',
                url: '/docs/testing/tools',
              },
            ],
          },
          {
            name: 'VSCode',
            items: [
              {
                name: 'Extensiones',
                url: '/docs/vscode/extensions',
              },
            ],
          },
          {
            name: 'Conferencias',
            items: [
              {
                name: 'Conferencias',
                url: '/docs/conferences/conferences',
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
