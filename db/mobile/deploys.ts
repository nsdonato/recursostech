import { DocPage, LinkType } from '@/lib/tdx-types'

const deploys: DocPage = {
  title: 'Deploys en Mobile',
  description: [
    '¿Como hacemos que otra persona pueda ver nuestras apps en los stores (Google Play / Apple Store)?',
    '¿Que herramientas nos permiten publicarla, configurarla, entre otras necesidades?',
    'Tu elección va a depender de las necesidades del proyecto y las preferencias del equipo de desarrollo.',
    'Algunas de las herramientas más populares son:',
  ],
  contributors: [
    {
      github_username: 'jpaddeo',
    },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Expo EAS',
      titleCard: '',
      links: [
        {
          type: LinkType.Web,
          url: 'https://expo.dev/eas',
        },
      ],
      cover: {
        src: '/mobile/expo.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
  ],
}

export default deploys
