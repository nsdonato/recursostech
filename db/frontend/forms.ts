import { DocPage, LinkType } from '@/lib/tdx-types'

const forms: DocPage = {
  title: 'Formularios',
  description: [
    'Herramienta de formularios para recolectar información de los usuarios.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'marcosferr' },
    { github_username: 'glaboryp' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Tally',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://tally.so/' }],
      cover: {
        src: '/frontend/tally.svg',
        height: 80,
        width: 120,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'React Hook Forms',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://react-hook-form.com/' }],
      cover: {
        src: '/frontend/reacthookforms.svg',
        height: 80,
        width: 70,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Formik',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://formik.org/' }],
      cover: {
        src: '/frontend/formik.svg',
        height: 70,
        width: 70,
      },
      videos: [],
    },
  ],
}

export default forms
