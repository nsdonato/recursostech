import { DocPage, LinkType } from '@/lib/tdx-types'

export const deploys: DocPage = {
  title: 'Deploys en backend',
  description: [
    'Para el despliegue (deploy) de aplicaciones backend, existen diversas herramientas que facilitan la implementación y gestión eficiente de los servicios en entornos de producción. La elección de la herramienta dependerá de factores como las necesidades específicas del proyecto, la infraestructura preferida y la familiaridad del equipo de desarrollo con la plataforma seleccionada.',
    'Algunas de las herramientas más populares son:',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'jamerrq' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Render',
      titleCard: '',
      cover: {
        src: '/backend/deploys/render.png',
        height: 110,
        width: 110,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.render.com/',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Fl0',
      titleCard: '',
      cover: {
        src: '/backend/deploys/fl0.svg',
        height: 80,
        width: 120,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.fl0.com/',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Railway',
      titleCard: '',
      cover: {
        src: '/backend/deploys/railway.svg',
        height: 80,
        width: 100,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://docs.railway.app',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Fly.io',
      titleCard: '',
      cover: {
        src: '/backend/deploys/fly.no-invert.svg',
        height: 80,
        width: 100,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://fly.io/',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Deno deploy',
      titleCard: '',
      cover: {
        src: '/backend/deploys/deno.svg',
        height: 80,
        width: 100,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://deno.com/deploy',
        },
      ],
      videos: [],
    },
  ],
}

export default deploys
