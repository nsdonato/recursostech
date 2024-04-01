import { DocPage, LinkType } from '@/lib/db-types'

const domains: DocPage = {
  title: 'Dominios',
  description: ['Donde comprar tu dominio para tu proyecto.'],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'guguponce' },
    { github_username: 'argenh' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'DonDominio',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://www.dondominio.com/es/' }],
      cover: {
        src: '/frontend/domains/dondominio.no-invert.svg',
        height: 80,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Porkbun',
      titleCard: '',
      links: [{ type: LinkType.Web, url: 'https://porkbun.com/' }],
      cover: {
        src: '/frontend/domains/porkbun.no-invert.svg',
        height: 80,
        width: 80,
      },
      videos: [],
    },
  ],
}

export default domains
