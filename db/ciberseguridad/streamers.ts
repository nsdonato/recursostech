import { DocPage, LinkType } from '@/lib/db-types'

export const streamers: DocPage = {
  title: 'Streamers',
  description: [
    'Conoce los streamers hispanohablantes,con los que aprenderás sobre distintas temáticas de ciberseguridad',
  ],
  contributors: [
    { github_username: 'mariaelisaaraya' },
    { github_username: 'EduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'S4vitar',
      titleCard: 'Ciberseguridad, Hacking Ético, Red Team & Pentesting.',
      links: [
        { type: LinkType.X, url: 'https://twitter.com/S4vitar' },
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/s4vitaar' },
        { type: LinkType.Ig, url: 'https://www.instagram.com/s4vitarx/' },
        { type: LinkType.Discord, url: 'https://discord.gg/hack4u' },
      ],
      cover: {
        src: '/streamers/hack4u.jpg',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Securiters',
      titleCard: 'Ciberseguridad para todos los públicos',
      links: [
        { type: LinkType.X, url: 'https://twitter.com/securiters' },
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/securiters' },
        { type: LinkType.Ig, url: 'https://www.instagram.com/securiters/' },
      ],
      cover: {
        src: '/streamers/securiters.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
  ],
}

export default streamers
