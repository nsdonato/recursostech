import { DocPage, LinkType } from '@/lib/db-types'

const tools: DocPage = {
  title: 'Herramientas',
  description: [
    'Diferentes herramientas que te pueden ayudar en el día a día como BackEnd.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'eduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Express',
      titleCard:
        'Entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto.',
      links: [{ type: LinkType.Web, url: 'https://expressjs.com/' }],
      cover: {
        src: '/backend/tools/expressjs.svg',
        height: 70,
        width: 150,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Spring Boot',
      titleCard:
        'Marco de código abierto basado en Java que se utiliza para programar aplicaciones independientes.',
      links: [
        { type: LinkType.Web, url: 'https://spring.io/projects/spring-boot' },
      ],
      cover: {
        src: '/backend/tools/spring-boot.no-invert.svg',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Django',
      titleCard:
        'Framework de desarrollo web de código abierto, escrito en Python, respetando el módelo MVC',
      links: [{ type: LinkType.Web, url: 'https://www.djangoproject.com/' }],
      cover: {
        src: '/backend/tools/django.svg',
        height: 80,
        width: 150,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Ruby on Rails',
      titleCard:
        'Framework de aplicaciones web de código abierto del lado del servidor escrito en el lenguaje de programación Ruby.',
      links: [{ type: LinkType.Web, url: 'https://rubyonrails.org/' }],
      cover: {
        src: '/backend/tools/rubyrails.no-invert.svg',
        height: 110,
        width: 110,
      },
      videos: [],
    },
  ],
}

export default tools
