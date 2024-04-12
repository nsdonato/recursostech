import { DocPage, LinkType } from '@/lib/db-types'

const streamers: DocPage = {
  title: 'Streamers',
  description: [
    'Conoce los streamers hispanohablantes, con los que aprenderás sobre distintas temáticas del desarrollo frontend',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'atticus64' },
    { github_username: 'glaboryp' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Vamoacodear',
      titleCard: 'React, TypeScript, Tailwind, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/vamoacodear' },
        { type: LinkType.Ig, url: 'https://www.instagram.com/vamoacodear' },
        { type: LinkType.Discord, url: 'https://discord.gg/JYnKadCSkV' },
        { type: LinkType.X, url: 'https://twitter.com/vamoacodear' },
      ],
      cover: {
        src: '/streamers/vamoacodear.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Mermelada Tech',
      titleCard: 'Comunidad de mujeres en Tech, Astro, Next, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/mermeladatech' },
      ],
      cover: {
        src: '/streamers/mermeladatech.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Afor Digital',
      titleCard: 'React, TypeScript, Uno CSS, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/afor_digital' },
      ],
      cover: {
        src: '/streamers/afor_digital.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Altaskur',
      titleCard: 'Node, React, etc.',
      links: [{ type: LinkType.Twitch, url: 'https://www.twitch.tv/altaskur' }],
      cover: {
        src: '/streamers/altaskur.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Midudev',
      titleCard: 'React, Astro, TypeScript, Tailwind, etc.',
      links: [{ type: LinkType.Twitch, url: 'https://www.twitch.tv/midudev' }],
      cover: {
        src: '/streamers/midudev.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Goncy',
      titleCard: 'Next, TypeScript, Tailwind, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/goncypozzo' },
      ],
      cover: {
        src: '/streamers/goncypozzo.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Ikurotime',
      titleCard: 'Next, Astro, Tailwind, Typescript, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/ikurotime' },
      ],
      cover: {
        src: '/streamers/ikurotime.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'ManzDev',
      titleCard: 'HTML, CSS, JavaScript, Web Components, etc.',
      links: [{ type: LinkType.Twitch, url: 'https://www.twitch.tv/manzdev' }],
      cover: {
        src: '/streamers/manzdev.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Carlos Azaustre',
      titleCard: 'JavaScript, React, Nodejs, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/carlosazaustre' },
      ],
      cover: {
        src: '/streamers/carlosazaustre.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
  ],
}

export default streamers
