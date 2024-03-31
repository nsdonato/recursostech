import { DocPage, LinkType } from '@/lib/db-types'

export const learn: DocPage = {
  title: 'Aprender Backend',
  description: [
    'Recursos GRATIS, en español, para aprender todo sobre los lenguajes necesarios para ser programador/a backend.',
  ],
  contributors: [
    {
      github_username: 'nsdonato',
    },
  ],
  pageItems: [
    {
      imgPlaceholder: 'freeCodeCamp',
      titleCard: 'Back End Development and APIs',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.freecodecamp.org/espanol/learn/back-end-development-and-apis/',
        },
      ],
      cover: {
        src: '/backend/learn/freecodecamp.svg',
        height: 80,
        width: 180,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Node.js',
      titleCard: 'Node.js',
      links: [
        {
          type: LinkType.Web,
          url: 'https://nodejs.org/en',
        },
      ],
      cover: {
        src: '/backend/languages/nodejs_logo.no-invert.svg',
        height: 120,
        width: 230,
      },
      videos: [
        {
          tooltip: 'Aprende a Programar con Node.js desde Cero. Por Bel',
          url: 'https://www.youtube.com/playlist?list=PLoIQktQDGsr8qFskV3lWcg0cabOmfgRce',
        },
        {
          tooltip: 'CURSO DE NODE.JS COMPLETO DESDE CERO. Por midudev',
          url: 'https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7',
        },
      ],
    },
  ],
}

export default learn
