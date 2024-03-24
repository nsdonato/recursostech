import { DocPage, LinkType } from '@/lib/tdx-types'

const authentication: DocPage = {
  title: 'Autenticación',
  description: [
    'Librerías para gestionar sesiones en aplicaciones web, simplificando el control de autenticación y seguridad del flujo de usuarios.',
  ],
  contributors: [
    {
      github_username: 'difagume',
    },
    {
      github_username: 'aresinodev',
    },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Auth.js',
      titleCard: 'Autenticación de código abierto para aplicaciones web',
      links: [
        {
          type: LinkType.Web,
          url: 'https://authjs.dev/',
        },
      ],
      cover: {
        src: '/frontend/authentication/authjs.webp',
        height: 65,
        width: 72,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Lucia',
      titleCard:
        'Lucia es una biblioteca de autenticación escrita en TypeScript que abstrae la complejidad del manejo de sesiones.',
      links: [
        {
          type: LinkType.Web,
          url: 'https://lucia-auth.com/',
        },
      ],
      cover: {
        src: '/frontend/authentication/lucia.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Auth0',
      titleCard:
        'Auth0 es una biblioteca de autenticación de fácil y rápida integración. Tanto para web, móviles y legacy.',
      links: [
        {
          type: LinkType.Web,
          url: 'https://auth0.com/es',
        },
      ],
      cover: {
        src: '/frontend/authentication/auth0.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
  ],
}

export default authentication
