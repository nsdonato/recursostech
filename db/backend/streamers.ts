import { DocPage, LinkType } from '@/lib/db-types'

export const sreamers: DocPage = {
  title: 'Streamers',
  description: [
    'Personas del mundo tech que hacen streaming en vivo sobre programación en backend.',
  ],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'Todocode',
      titleCard: 'Java, Spring, etc.',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/todocode' },
        { type: LinkType.Ig, url: 'https://www.instagram.com/todo_code' },
        { type: LinkType.Web, url: 'https://todocodeacademy.com/' },
        {
          type: LinkType.Discord,
          url: 'https://discord.com/invite/MqVqXD2MfR',
        },
        { type: LinkType.X, url: 'https://twitter.com/todo_code' },
      ],
      cover: {
        src: '/backend/streamers/todocode.png',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Codely TV',
      titleCard: 'Java, PHP, RabbitMQ, Patrones y mucho más!',
      links: [
        { type: LinkType.Twitch, url: 'https://www.twitch.tv/CodelyTV' },
        { type: LinkType.YouTube, url: 'https://www.youtube.com/c/CodelyTV' },
      ],
      cover: {
        src: '/backend/streamers/codely.svg',
        height: 80,
        width: 160,
      },
      videos: [
        {
          tooltip: 'RabbitMQ vs Kafka - ¿Cuál escoger?',
          url: 'https://youtu.be/IZh8wB9PSqo?si=1HYtvO317mhZAvjv',
        },
        {
          tooltip:
            'Por qué se DESORDENAN los Mensajes en los Sistemas de Mensajería (Kafka, RabbitMQ, etc)',
          url: 'https://youtu.be/AM4hxuGmEBU?si=xcDb2wHRWEGGyA9r',
        },
      ],
    },
  ],
}

export default sreamers
