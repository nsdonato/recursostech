import { DocPage, LinkType } from '@/lib/db-types'

const spain: DocPage = {
  title: 'Conferencias',
  description: ['Conferencias de programación en España'],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'Bilbo Stack',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://bilbostack.com/' }],
      cover: {
        src: '/conferences/espana/bilbostack.png',
        height: 60,
        width: 230,
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
        height: 50,
        width: 220,
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
    {
      imgPlaceholder: 'Salmorejo Tech',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://salmorejo.tech/2024/' }],
      cover: {
        src: '/conferences/espana/salmorejotech.svg',
        height: 80,
        width: 190,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Córdoba',
        date: {
          month: 'Abril',
          days: ['24'],
        },
      },
    },
    {
      imgPlaceholder: 'Software Crafters Barcelona',
      titleCard: '',
      links: [
        { type: LinkType.Web, url: 'https://softwarecrafters.barcelona/' },
      ],
      cover: {
        src: '/conferences/espana/scbcn.png',
        height: 60,
        width: 60,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Barcelona',
        date: {
          month: 'Octubre',
          days: ['20', '21', '22'],
        },
      },
    },
    {
      imgPlaceholder: 'Barcelona Developers Conference',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.devbcn.com/' }],
      cover: {
        src: '/conferences/espana/dev-bcn.png',
        height: 60,
        width: 160,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Barcelona',
        date: {
          month: 'Julio',
          days: ['13', '14'],
        },
      },
    },
    {
      imgPlaceholder: 'Pamplona Software Crafters',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://pamplonaswcraft.com/' }],
      cover: {
        src: '/conferences/espana/pamplonaswcraft.jpg',
        height: 80,
        width: 80,
      },
      videos: [],
      infoExtra: {
        country: '🇪🇸',
        city: 'Pamplona',
        date: {
          month: 'Mayo',
          days: ['17', '18'],
        },
      },
    },
  ],
}

export default spain
