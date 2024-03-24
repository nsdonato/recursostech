import { DocPage, LinkType } from '@/lib/tdx-types'

const colombia: DocPage = {
  title: 'Conferencias',
  description: ['Conferencias de programación de todo el mundo!'],
  contributors: [{ github_username: 'argenh' }],
  pageItems: [
    {
      imgPlaceholder: 'CityJS',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://medellin.cityjsconf.org/' }],
      cover: {
        src: '/conferences/colombia/cityjs.svg',
        height: 180,
        width: 140,
      },
      videos: [],
      infoExtra: {
        country: '🇨🇴',
        city: 'Medellín',
        date: {
          month: 'Octubre',
          days: ['25', '26'],
        },
      },
    },
    {
      imgPlaceholder: 'BoyaConf',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://boyaca-dev.org/' }],
      cover: {
        src: '/conferences/colombia/boyaconf.svg',
        height: 90,
        width: 60,
      },
      videos: [],
      infoExtra: {
        country: '🇨🇴',
        city: 'Boyacá',
        date: {
          month: 'Noviembre',
          days: ['9'],
        },
      },
    },
  ],
}

export default colombia
