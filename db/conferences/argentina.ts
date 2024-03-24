import { DocPage, LinkType } from '@/lib/tdx-types'

const argentina: DocPage = {
  title: 'Conferencias',
  description: ['Conferencias de programación de todo el mundo!'],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'Nerdearla 101',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://101.nerdear.la/es/' }],
      cover: {
        src: '/conferences/argentina/nerdearla.no-invert.svg',
        height: 90,
        width: 60,
      },
      videos: [],
      infoExtra: {
        country: '🇦🇷',
        city: 'Buenos Aires',
        date: {
          month: 'Abril',
          days: ['21', '22', '23', '24'],
        },
      },
    },
  ],
}

export default argentina
