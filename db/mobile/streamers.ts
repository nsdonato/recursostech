import { DocPage, LinkType } from '@/lib/db-types'

const streamers: DocPage = {
  title: 'Streamers',
  description: [
    'Personas del mundo tech que hacen streaming en vivo sobre temas relacionados con mobile.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'jpaddeo' },
    { github_username: 'mariaelisaaraya' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Neryad',
      titleCard: 'Flutter, JavaScript, etc.',
      links: [
        { type: LinkType.X, url: 'https://twitter.com/neryadG' },
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/neryad' },
        { type: LinkType.Web, url: 'https://neryad.dev/' },
        { type: LinkType.Ig, url: 'https://www.instagram.com/neryadg/' },
      ],
      cover: {
        src: '/streamers/neryad.png',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'notJust.dev (Vadim Savin)',
      titleCard: 'React Native, Expo.dev, Typescript, JavaScript, etc.',
      links: [
        { type: LinkType.X, url: 'https://twitter.com/VadimNotJustDev/' },
        { type: LinkType.Web, url: 'https://www.notjust.dev/' },
        {
          type: LinkType.Ig,
          url: 'https://www.instagram.com/VadimNotJustDev/',
        },
        {
          type: LinkType.YouTube,
          url: 'https://www.youtube.com/channel/UCYSa_YLoJokZAwHhlwJntIA',
        },
      ],
      cover: {
        src: '/streamers/vadim-headshot.webp',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'MoureDev',
      titleCard: 'IOS, swift, , Android, kotlin, etc.',
      links: [
        { type: LinkType.Discord, url: 'https://discord.com/invite/mouredev' },
        { type: LinkType.Ig, url: 'https://www.instagram.com/mouredev' },
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/mouredev' },
        { type: LinkType.X, url: 'https://twitter.com/MoureDev' },
        { type: LinkType.Web, url: 'https://mouredev.com/' },
        { type: LinkType.YouTube, url: 'https://www.youtube.com/@mouredev' },
      ],
      cover: {
        src: '/streamers/moure.png',
        height: 80,
        width: 90,
      },
      videos: [],
    },
  ],
}

export default streamers
