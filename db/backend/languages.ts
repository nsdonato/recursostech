import { DocPage, LinkType } from '@/lib/db-types'

export const languages: DocPage = {
  title: 'Lenguajes de programación',
  description: ['Los más utilizados a la hora de crear aplicaciones backend.'],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'eduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'C#',
      titleCard:
        'Lenguaje de programación moderno, innovador y de código abierto para crear todas sus aplicaciones.',
      cover: {
        src: '/backend/languages/csharp.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://dotnet.microsoft.com/es-es/languages/csharp',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Java',
      titleCard:
        'Java es un lenguaje de programación y una plataforma informática.',
      cover: {
        src: '/backend/languages/java.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [{ type: LinkType.Web, url: 'https://www.java.com/es/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'NodeJS',
      titleCard:
        'Entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript.',
      cover: {
        src: '/backend/languages/nodejs_logo.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [{ type: LinkType.Web, url: 'https://nodejs.org/en' }],
      videos: [],
    },
    {
      imgPlaceholder: 'PHP',
      titleCard:
        'Lenguaje de programación interpretado​ del lado del servidor y de uso general que se adapta especialmente al desarrollo web.',
      cover: {
        src: '/backend/languages/php-logo.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [{ type: LinkType.Web, url: 'https://www.php.net/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'Bun',
      titleCard:
        'Entorno en tiempo de ejecución de JavaScript, como Node o Deno, todo en uno.',
      cover: {
        src: '/backend/languages/bun-logo.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [{ type: LinkType.Web, url: 'https://bun.sh/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'Deno',
      titleCard:
        'Runtime para JavaScript y TypeScript basado en el motor V8 y escrito en Rust.',
      cover: {
        src: '/backend/languages/deno-logo.no-invert.svg',
        height: 90,
        width: 100,
      },
      links: [{ type: LinkType.Web, url: 'https://deno.com/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'Python',
      titleCard:
        'Lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.',
      cover: {
        src: '/backend/languages/python-logo.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [{ type: LinkType.Web, url: 'https://www.python.org/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'Go',
      titleCard:
        'Lenguaje de programación concurrente y compilado con tipado estático inspirado en la sintaxis de C.',
      cover: {
        src: '/backend/languages/go-logo.no-invert.svg',
        height: 80,
        width: 90,
      },
      links: [{ type: LinkType.Web, url: 'https://go.dev/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'Ruby',
      titleCard:
        'Lenguaje de programación interpretado, reflexivo y orientado a objetos.',
      cover: {
        src: '/backend/languages/ruby-logo.no-invert.svg',
        height: 80,
        width: 60,
      },
      links: [{ type: LinkType.Web, url: 'https://www.ruby-lang.org/es/' }],
      videos: [],
    },
    {
      imgPlaceholder: 'Kotlin',
      titleCard: 'Lenguaje favorito de Google y Android.',
      cover: {
        src: '/backend/languages/kotlin-logo.no-invert.svg',
        height: 80,
        width: 60,
      },
      links: [{ type: LinkType.Web, url: 'https://kotlinlang.org/' }],
      videos: [],
    },
  ],
}

export default languages
