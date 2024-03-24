import { DocPage, LinkType } from '@/lib/tdx-types'

const deploys: DocPage = {
  title: 'Deploys en frontend',
  description: [
    '¿Como hacemos que otra persona pueda ver nuestra web por internet? <br />',
    '¿Que herramientas nos permiten publicarla, configurarla, entre otras necesidades? <br />',
    'Tu elección va a depender de las necesidades del proyecto y las preferencias del equipo de desarrollo. <br />',
    'Algunas de las herramientas más populares son:',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'webzma' },
    { github_username: 'jamerrq' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Vercel',
      titleCard:
        'Frontend Cloud. Construí, escalá y asegurá una web más rápida y personalizada.',
      links: [{ type: LinkType.Web, url: 'https://vercel.com/' }],
      cover: {
        src: '/frontend/vercel.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Netlify',
      titleCard:
        'Plataforma de desarrollo moderna para que las empresas obtengan la velocidad, la agilidad y el rendimiento de una arquitectura web escalable y componible.',
      links: [{ type: LinkType.Web, url: 'https://www.netlify.com/' }],
      cover: {
        src: '/frontend/netlify.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Heroku',
      titleCard:
        'Permite a los devs crear, ejecutar y operar aplicaciones totalmente en la nube.',
      links: [{ type: LinkType.Web, url: 'https://www.heroku.com/' }],
      cover: {
        src: '/frontend/heroku.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Github Pages',
      titleCard:
        'Aloja tu repositorio de GitHub. Edita, envia y los cambios estarán activos.',
      links: [{ type: LinkType.Web, url: 'https://pages.github.com/' }],
      cover: {
        src: '/frontend/github.svg',
        height: 80,
        width: 190,
      },
      videos: [
        {
          tooltip: 'Sube tu web a github gratis',
          url: 'https://www.youtube.com/shorts/qprqCT9qjgo',
        },
      ],
    },
    {
      imgPlaceholder: 'Deno deploy',
      titleCard:
        'Desarrolla en JS o TS, desplegá globalmente en segundos y escala a miles de millones de peticiones.',
      links: [{ type: LinkType.Web, url: 'https://deno.com/deploy' }],
      cover: {
        src: '/frontend/deno.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
  ],
}

export default deploys
