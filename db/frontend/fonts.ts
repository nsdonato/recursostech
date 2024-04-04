import { DocPage, LinkType } from '@/lib/db-types'

const fonts: DocPage = {
  title: 'Fuentes',
  description: [
    'Encontrá la tipografía que más se adapte a tu proyecto!',
    'En alguna de las herramientas también podés encontrar combinaciones de fuentes que funcionan bien juntas.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'maadeval' },
    { github_username: 'glaboryp' },
    { github_username: 'eduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Fontpair',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.fontpair.co/' }],
      cover: {
        src: '/frontend/fonts/fontpair.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Google Fonts',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://fonts.google.com/' }],
      cover: {
        src: '/frontend/fonts/googlefonts.no-invert.svg',
        height: 100,
        width: 210,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Font Share',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.fontshare.com' }],
      cover: {
        src: '/frontend/fonts/fontshare.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Fontsource',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://fontsource.org/' }],
      cover: {
        src: '/frontend/fonts/fontsource.no-invert.svg',
        height: 80,
        width: 60,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Fontspace',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.fontspace.com/' }],
      cover: {
        src: '/frontend/fonts/fontspace.no-invert.svg',
        height: 90,
        width: 160,
      },
      videos: [],
    },
    {
      imgPlaceholder: '1001 Fonts',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.1001fonts.com/' }],
      cover: {
        src: '/frontend/fonts/1001fonts.no-invert.svg',
        height: 80,
        width: 160,
      },
      videos: [],
    },
  ],
}

export default fonts
