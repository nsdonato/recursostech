import { LinkType } from '@/lib/db-types'

export const noeSocialNetworks = [
  {
    type: LinkType.Discord,
    url: 'https://discord.gg/JYnKadCSkV',
    cover: {
      width: 40,
      height: 40,
      src: '/socials/discord-icon.no-invert.svg',
    },
  },
  {
    type: LinkType.X,
    url: 'https://twitter.com/vamoacodear',
    cover: {
      width: 35,
      height: 35,
      src: '/socials/x-icon.svg',
    },
  },
  {
    type: LinkType.TikTok,
    url: 'https://tiktok.com/@vamoacodear',
    cover: {
      width: 30,
      height: 30,
      src: '/socials/tiktok-icon.no-invert.svg',
    },
  },
  {
    type: LinkType.Ig,
    url: 'https://instagram.com/vamoacodear',
    cover: {
      width: 30,
      height: 30,
      src: '/socials/instagram-icon.no-invert.svg',
    },
  },
  {
    type: LinkType.YouTube,
    url: 'https://youtube.com/vamoacodear',
    cover: {
      width: 30,
      height: 30,
      src: '/socials/youtube.no-invert.svg',
    },
  },
  {
    type: LinkType.Twitch,
    url: 'https://www.twitch.tv/vamoacodear',
    cover: {
      width: 30,
      height: 30,
      src: '/socials/twitch-icon.no-invert.svg',
    },
  },
]
