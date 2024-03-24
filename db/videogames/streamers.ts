import { DocPage, LinkType } from '@/lib/db-types'

const streamers: DocPage = {
  title: 'Streamers',
  description: [
    'Personas del mundo tech que hacen streaming en vivo sobre programación en videojuegos.',
  ],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'Rothio Tome',
      titleCard: 'Videojuegos con Godot, Unity, GDScript, C# y más',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/rothiotome' },
      ],
      cover: {
        src: '/streamers/rothiotome.png',
        height: 80,
        width: 80,
      },
      videos: [],
    },
  ],
}

export default streamers
