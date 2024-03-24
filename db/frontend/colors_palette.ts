import { DocPage, LinkType } from '@/lib/tdx-types'

const colors_palette: DocPage = {
  title: 'Paleta de colores',
  description: [
    'Estas haciendo una página web y no sabes qué colores usar o comó combinarlos?',
    'Te dejo una lista de páginas que te ayudarán a elegir la paleta de colores perfecta para tu proyecto! 🚀',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'ddragondev' },
    { github_username: 'IvanMJs' },
    { github_username: 'mariaelisaaraya' },
    { github_username: 'eduWTR' },
    { github_username: 'mig-code' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Happy Hues',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.happyhues.co/' }],
      cover: {
        src: '/frontend/happyhues.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Tints',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.tints.dev/' }],
      cover: {
        src: '/frontend/tints.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'UI Colors',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://uicolors.app/' }],
      cover: {
        src: '/frontend/uicolors.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Cool Contrast',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://coolcontrast.vercel.app/' }],
      cover: {
        src: '/frontend/coolcontrast.svg',
        height: 80,
        width: 130,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'ColorSpace',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://mycolor.space/' }],
      cover: {
        src: '/frontend/colorspace.svg',
        height: 80,
        width: 170,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Adobe Colors',
      titleCard: 'Generador de paleta de colores gratuitos',
      links: [
        {
          type: LinkType.Web,
          url: 'https://color.adobe.com/es/create/color-wheel/',
        },
      ],
      cover: {
        src: '/frontend/adobe-color.svg',
        height: 100,
        width: 120,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Coolors',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://coolors.co/' }],
      cover: {
        src: '/frontend/coolors.no-invert.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
  ],
}

export default colors_palette
