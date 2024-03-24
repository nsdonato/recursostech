import { DocPage, LinkType } from '@/lib/tdx-types'

const spain: DocPage = {
  title: 'Conferencias',
  description: ['Conferencias de programación de todo el mundo!'],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'Bilbo Stack',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://bilbostack.com/' }],
      cover: {
        src: '/conferences/espana/bilbostack.png',
        height: 80,
        width: 190,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Bilbao',
        date: {
          month: 'Enero',
          days: ['27'],
        },
      },
    },
    {
      imgPlaceholder: 'T3chfest',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://t3chfest.es/2024/' }],
      cover: {
        src: '/conferences/espana/t3chfest.svg',
        height: 80,
        width: 190,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Madrid',
        date: {
          month: 'Marzo',
          days: ['14', '15'],
        },
      },
    },
    {
      imgPlaceholder: 'Commit Conf',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://commit-conf.com/' }],
      cover: {
        src: '/conferences/espana/commitconf.no-invert.svg',
        height: 80,
        width: 190,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Madrid',
        date: {
          month: 'Abril',
          days: ['19', '20'],
        },
      },
    },
    {
      imgPlaceholder: 'Pulpo Conf',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://pulpocon.es/' }],
      cover: {
        src: '/conferences/espana/pulpocon.svg',
        height: 80,
        width: 190,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Galicia',
        date: {
          month: 'Septiembre',
          days: ['07', '08', '09'],
        },
      },
    },
  ],
}

export default spain
