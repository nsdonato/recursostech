import { DocPage, LinkType } from '@/lib/db-types'

const tools: DocPage = {
  title: 'Herramientas',
  description: [
    'Diferentes herramientas que te pueden ayudar en el día a día como Frontend.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'ivanlolivier' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'GrowthBook',
      titleCard: 'Feature flags y A/B testing',
      links: [{ type: LinkType.Web, url: 'https://www.growthbook.io/' }],
      cover: {
        src: '/frontend/tools/growthbook.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Squoosh',
      titleCard:
        'Squoosh es el optimizador de imágenes definitivo que le permite comprimir y comparar imágenes con diferentes códecs en su navegador.',
      links: [{ type: LinkType.Web, url: 'https://squoosh.app/' }],
      cover: {
        src: '/frontend/tools/squoosh.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Sweet Alert 2',
      titleCard: 'Bonito, responsivo, adaptable reemplazo para JS pop ups.',
      links: [{ type: LinkType.Web, url: 'https://sweetalert2.github.io/' }],
      cover: {
        src: '/frontend/tools/sweet-alert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Quicktype',
      titleCard: 'Convertidor JSON para distintos lenguajes.',
      links: [{ type: LinkType.Web, url: 'https://quicktype.io/' }],
      cover: {
        src: '/frontend/tools/quicktype.no-invert.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'CSS layout generator',
      titleCard: 'Fácil generador de layouts para CSS.',
      links: [{ type: LinkType.Web, url: 'https://layout.bradwoods.io/' }],
      cover: {
        src: '/frontend/tools/css-layout-generator.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
  ],
}

export default tools
