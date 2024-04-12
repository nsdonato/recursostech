import { DocPage, LinkType } from '@/lib/db-types'

export const learn: DocPage = {
  title: 'Aprender Frontend',
  description: [
    'Recursos GRATIS, en español, para aprender todo lo necesario para ser programador/a frontend.',
  ],
  contributors: [
    {
      github_username: 'nsdonato',
    },
  ],
  pageItems: [
    {
      imgPlaceholder: 'HTML',
      titleCard: 'Todo sobre HTML',
      links: [
        {
          type: LinkType.Web,
          url: 'https://lenguajehtml.com/html/',
        },
      ],
      cover: {
        src: 'https://lenguajehtml.com/assets/html.webp',
        height: 100,
        width: 100,
      },
      videos: [
        {
          tooltip: 'Curso de HTML con midudev',
          url: 'https://www.youtube.com/watch?v=3nYLTiY5skU&ab_channel=midulive',
        },
        {
          tooltip: 'CONSEJOS y BUENAS PRÁCTICAS PARA FRONTEND: HTML + WEBFONTS',
          url: 'https://www.youtube.com/watch?v=SVomAFpMw30&ab_channel=ManzDev',
        },
      ],
    },
    {
      imgPlaceholder: 'CSS',
      titleCard: 'Todo sobre CSS',
      links: [
        {
          type: LinkType.Web,
          url: 'https://lenguajecss.com/css/',
        },
      ],
      cover: {
        src: 'https://lenguajecss.com/assets/css.webp',
        height: 100,
        width: 100,
      },
      videos: [
        {
          tooltip: 'Curso de CSS con midudev',
          url: 'https://www.youtube.com/watch?v=hrxjBqZWsb0&ab_channel=midulive',
        },
        {
          tooltip: 'CONSEJOS y BUENAS PRÁCTICAS PARA FRONTEND: CSS',
          url: 'https://www.youtube.com/watch?v=pJGEELsEM1w&t=301s&ab_channel=ManzDev',
        },
      ],
    },
    {
      imgPlaceholder: 'JavaScript',
      titleCard: 'Todo sobre JavaScript',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.aprendejavascript.dev/',
        },
        {
          type: LinkType.Web,
          url: 'https://lenguajejs.com/',
        },
      ],
      cover: {
        src: 'https://lenguajejs.com/assets/javascript.webp',
        height: 100,
        width: 100,
      },
      videos: [
        {
          tooltip: 'Curso de JavaScript con midudev',
          url: 'https://www.youtube.com/watch?v=Z34BF9PCfYg&ab_channel=midulive',
        },
      ],
    },
    {
      imgPlaceholder: 'React',
      titleCard: 'Todo sobre React',
      links: [
        {
          type: LinkType.Web,
          url: 'https://react.dev/',
        },
      ],
      cover: {
        src: '/frontend/frameworks/react.no-invert.svg',
        height: 100,
        width: 100,
      },
      videos: [
        {
          tooltip: 'Curso de React con midudev',
          url: 'https://www.youtube.com/watch?v=7iobxzd_2wY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&ab_channel=midulive',
        },
      ],
    },
    {
      imgPlaceholder: 'TypeSript',
      titleCard: 'Todo sobre TypeScript',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.typescriptlang.org/',
        },
      ],
      cover: {
        src: '/frontend/languages/typescript.no-invert.svg',
        height: 100,
        width: 100,
      },
      videos: [
        {
          tooltip:
            'TypeScript - Tutorial desde CERO en Español 🏆. Por midudev',
          url: 'https://www.youtube.com/watch?v=xtp_DuPxo9Q&t=6s&ab_channel=midudev',
        },
      ],
    },
  ],
}

export default learn
