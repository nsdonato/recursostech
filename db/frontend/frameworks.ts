import { DocPage, LinkType } from '@/lib/db-types'

const frameworks: DocPage = {
  title: 'Frameworks',
  description: [
    'Los frameworks más utilizados a la hora de crear aplicaciones web.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'florluzduarte' },
    { github_username: 'eduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'React.js (libreria)',
      titleCard: 'Crear interfaces de usuario a partir de componentes',
      links: [{ type: LinkType.Web, url: 'https://react.dev/' }],
      cover: {
        src: '/frontend/frameworks/react.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Next.js',
      titleCard:
        'Te permite crear aplicaciones web de alta calidad con la potencia de los componentes React',
      links: [{ type: LinkType.Web, url: 'https://nextjs.org/' }],
      cover: {
        src: '/frontend/frameworks/nextjs.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Angular',
      titleCard:
        'Framework para construir aplicaciones web con TypeScript, HTML y CSS',
      links: [{ type: LinkType.Web, url: 'https://angular.io/' }],
      cover: {
        src: '/frontend/frameworks/angular.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Vue.js',
      titleCard: 'Framework progresivo para construir interfaces de usuario',
      links: [{ type: LinkType.Web, url: 'https://vuejs.org/' }],
      cover: {
        src: '/frontend/frameworks/vue.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Svelte',
      titleCard: 'Framework para construir aplicaciones web con JavaScript',
      links: [{ type: LinkType.Web, url: 'https://svelte.dev/' }],
      cover: {
        src: '/frontend/frameworks/svelte.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Astro',
      titleCard: 'Framework para construir sitios web estáticos',
      links: [{ type: LinkType.Web, url: 'https://astro.build' }],
      cover: {
        src: '/frontend/frameworks/astro.svg',
        height: 90,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Qwik',
      titleCard: 'Framework para crear webs interactivas sin esfuerzo',
      links: [{ type: LinkType.Web, url: 'https://qwik.dev/' }],
      cover: {
        src: '/frontend/frameworks/qwik.no-invert.svg',
        height: 90,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Blazor',
      titleCard: 'Framework del equipo de Microsoft ASP.NET',
      links: [
        {
          type: LinkType.Web,
          url: 'https://dotnet.microsoft.com/es-es/apps/aspnet/web-apps/blazor',
        },
      ],
      cover: {
        src: '/frontend/frameworks/blazor.no-invert.svg',
        height: 90,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Preact (librería)',
      titleCard: 'La versión peque de React.',
      links: [{ type: LinkType.Web, url: 'https://preactjs.com/' }],
      cover: {
        src: '/frontend/frameworks/preact.no-invert.svg',
        height: 90,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'SolidJS (librería)',
      titleCard: 'Librería JS declarativa para crear IUs.',
      links: [{ type: LinkType.Web, url: 'https://www.solidjs.com/' }],
      cover: {
        src: '/frontend/frameworks/solidjs.no-invert.svg',
        height: 90,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Lit (librería)',
      titleCard: 'Librería de web componentes. Rápidos y livianos.',
      links: [{ type: LinkType.Web, url: 'https://lit.dev/' }],
      cover: {
        src: '/frontend/frameworks/lit.no-invert.svg',
        height: 90,
        width: 140,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Ember JS',
      titleCard: 'Framework para desarrolladores web ambiciosos',
      links: [{ type: LinkType.Web, url: 'https://emberjs.com/' }],
      cover: {
        src: '/frontend/frameworks/ember.no-invert.svg',
        height: 90,
        width: 90,
      },
      videos: [],
    },
  ],
}

export default frameworks
