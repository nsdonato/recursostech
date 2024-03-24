import { DocPage, LinkType } from '@/lib/db-types'

const languages: DocPage = {
  title: 'Lenguajes',
  description: [
    'Si te preguntas que lenguajes tenes que aprender para poder ser Frontend, te dejo en orden, los más utilizados:',
  ],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'HTML',
      titleCard: 'Lenguaje de marcado de hipertexto',
      links: [{ type: LinkType.Web, url: 'https://html.spec.whatwg.org/' }],
      cover: {
        src: '/frontend/languages/html5.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'CSS',
      titleCard: 'Hojas de estilo en cascada',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.w3.org/Style/CSS/Overview.en.html',
        },
      ],
      cover: {
        src: '/frontend/languages/css.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'JavaScript',
      titleCard: 'Lenguaje de programación',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
        },
      ],
      cover: {
        src: '/frontend/languages/js.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'TypeScript',
      titleCard: 'Superset de JavaScript',
      links: [{ type: LinkType.Web, url: 'https://www.typescriptlang.org/' }],
      cover: {
        src: '/frontend/languages/typescript.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
  ],
}

export default languages
