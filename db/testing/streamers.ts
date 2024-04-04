import { DocPage, LinkType } from '@/lib/db-types'

const streamers: DocPage = {
  title: 'Streamers',
  description: [
    'Personas del mundo tech que hacen streaming en vivo sobre temas relacionados con testing.',
  ],
  contributors: [
    {
      github_username: 'nsdonato',
    },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Charly Automatiza',
      titleCard: 'Cypress, Playwright, etc.',
      links: [
        {
          type: LinkType.X,
          url: 'https://twitter.com/charlyautomatiza',
        },
        {
          type: LinkType.Twitch,
          url: 'https://www.twitch.tv/charlyautomatiza',
        },
        {
          type: LinkType.Web,
          url: 'https://charlyautomatiza.tech/',
        },
      ],
      cover: {
        src: '/streamers/charlyautomatiza.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Coding is caring',
      titleCard: 'Testing, Cypress, etc.',
      links: [
        {
          type: LinkType.X,
          url: 'https://twitter.com/codingiscaring',
        },
        {
          type: LinkType.Twitch,
          url: 'https://www.twitch.tv/codingiscaring',
        },
        {
          type: LinkType.Web,
          url: 'https://mariasoria.dev/',
        },
        {
          type: LinkType.Web,
          url: 'https://yodralopez.dev/',
        },
      ],
      cover: {
        src: '/streamers/codingiscaring.png',
        height: 80,
        width: 90,
      },
      videos: [],
    },
  ],
}

export default streamers
