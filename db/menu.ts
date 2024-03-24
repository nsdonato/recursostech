import { Menu } from '@/lib/menu-types'

export const menu: Menu[] = [
  {
    name: 'Frontend',
    items: [
      {
        name: 'Animación',
        url: '/frontend/animation',
      },
      { name: 'Autenticación', url: '/frontend/authentication' },
      {
        name: 'Colores',
        url: '/frontend/colors_palette',
      },
      {
        name: 'Componentes',
        url: '/frontend/components_library',
      },
      {
        name: 'Deploys',
        url: '/frontend/deploys',
      },
      {
        name: 'Dominios',
        url: '/frontend/domains',
      },
      {
        name: 'Forms',
        url: '/frontend/forms',
      },
      {
        name: 'Frameworks',
        url: '/frontend/frameworks',
      },
      {
        name: 'Fuentes',
        url: '/frontend/fonts',
      },
      {
        name: 'Herramientas',
        url: '/frontend/tools',
      },
      {
        name: 'Iconos',
        url: '/frontend/icons',
      },
      {
        name: 'Imagenes',
        url: '/frontend/images',
      },
      {
        name: 'Lenguajes',
        url: '/frontend/languages',
      },
      {
        name: 'Streamers',
        url: '/frontend/streamers',
      },
    ],
  },
  {
    name: 'Backend',
    items: [
      {
        name: 'Deploys',
        url: '/backend/deploys',
      },
      {
        name: 'Streamers',
        url: '/backend/streamers',
      },
      {
        name: 'Lenguajes',
        url: '/backend/languages',
      },
    ],
  },
  {
    name: 'Testing',
    items: [
      {
        name: 'Herramientas',
        url: '/testing/tools',
      },
      {
        name: 'Streamers',
        url: '/testing/streamers',
      },
    ],
  },
  {
    name: 'Extensiones',
    items: [
      {
        name: 'VSCode',
        url: '/extensions/vscode',
      },
      {
        name: 'Google Chrome',
        url: '/extensions/chrome',
      },
    ],
  },
  {
    name: 'Conferencias',
    items: [
      {
        name: 'España 🇪🇸',
        url: '/conferences/spain',
      },
      {
        name: 'Argentina 🇦🇷',
        url: '/conferences/argentina',
      },
      {
        name: 'Colombia 🇨🇴',
        url: '/conferences/colombia',
      },
    ],
  },
  {
    name: 'Mobile',
    items: [
      {
        name: 'Deploys',
        url: '/mobile/deploys',
      },
      {
        name: 'Streamers',
        url: '/mobile/streamers',
      },
    ],
  },
  {
    name: 'Ciberseguridad',
    items: [
      {
        name: 'Streamers',
        url: '/ciberseguridad/streamers',
      },
    ],
  },
]
