import { DocPage, LinkType } from '@/lib/tdx-types'

export const streamers: DocPage = {
  title: 'Streamers',
  description: [
    'Personas del mundo tech que hacen streaming en vivo sobre temas relacionados con ciberseguridad.',
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
        width: 90,
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
        width: 90,
      },
      videos: [],
    },
  ],
}

export default streamers
