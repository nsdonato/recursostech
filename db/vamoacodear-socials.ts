import { LinkType } from '@/lib/db-types'

export const noeSocialNetworks = [
  {
    type: LinkType.Discord,
    url: 'https://discord.gg/JYnKadCSkV',
    cover: {
      width: 50,
      height: 50,
      src: '/socials/discord_rounded.svg',
    },
  },
  {
    type: LinkType.X,
    url: 'https://twitter.com/vamoacodear',
    cover: {
      width: 50,
      height: 65,
      src: '/socials/x_rounded.svg',
    },
  },
  {
    type: LinkType.TikTok,
    url: 'https://tiktok.com/@vamoacodear',
    cover: {
      width: 50,
      height: 60,
      src: '/socials/tiktok_rounded.svg',
    },
  },
  {
    type: LinkType.Ig,
    url: 'https://instagram.com/vamoacodear',
    cover: {
      width: 50,
      height: 50,
      src: '/socials/instagram_rounded.svg',
    },
  },
  {
    type: LinkType.YouTube,
    url: 'https://youtube.com/vamoacodear',
    cover: {
      width: 50,
      height: 50,
      src: '/socials/youtube_rounded.svg',
    },
  },
  {
    type: LinkType.Twitch,
    url: 'https://www.twitch.tv/vamoacodear',
    cover: {
      width: 50,
      height: 50,
      src: '/socials/twitch_rounded.svg',
    },
  },
]
