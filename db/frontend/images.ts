import { DocPage, LinkType } from '@/lib/db-types'

const images: DocPage = {
  title: 'Imagenes',
  description: [
    'Diferentes paginas en las cuales puedes buscar imagenes sin preocuparte por el copyright.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'guskpo20' },
    { github_username: 'guguponce' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Pexels',
      titleCard: 'Imagenes de uso libre',
      links: [{ type: LinkType.Web, url: 'https://www.pexels.com/es-es/' }],
      cover: {
        src: '/frontend/images/pexels.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Animated Backgrounds',
      titleCard: 'Fondos css animados',
      links: [{ type: LinkType.Web, url: 'https://animatedbackgrounds.me' }],
      cover: {
        src: '/frontend/images/animated-backgrounds.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Undraw',
      titleCard:
        'Colección de ilustraciones libres (open source) con imágenes vectoriales en formato SVG',
      links: [{ type: LinkType.Web, url: 'https://undraw.co' }],
      cover: {
        src: '/frontend/images/undraw.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Humaaans',
      titleCard: 'Ilustraciones de personas con una biblioteca de diseño',
      links: [{ type: LinkType.Web, url: 'https://www.humaaans.com' }],
      cover: {
        src: '/frontend/images/humaaans.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
  ],
}

export default images
