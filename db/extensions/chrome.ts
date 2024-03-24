import { DocPage, LinkType } from '@/lib/db-types'

const chrome: DocPage = {
  title: 'Extensions',
  description: [
    'Extensiones para que tu día a día con Google Chrome, sea más productivo.',
  ],
  contributors: [{ github_username: 'nsdonato' }],
  pageItems: [
    {
      imgPlaceholder: 'Dark Reader',
      titleCard: 'Modo oscuro para cualquier página web',
      links: [{ type: LinkType.Web, url: 'https://darkreader.org/' }],
      cover: {
        src: '',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Grammarly',
      titleCard: 'Corrector ortográfico y gramatical',
      links: [
        { type: LinkType.Web, url: 'https://www.grammarly.com/' },
        {
          type: LinkType.Store,
          url: 'https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen',
        },
      ],
      cover: {
        src: '',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'JSON Viewer Pro',
      titleCard: 'Visualizador de JSON',
      links: [
        {
          type: LinkType.Store,
          url: 'https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc',
        },
      ],
      cover: {
        src: '',
        height: 80,
        width: 80,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'React Developer Tools',
      titleCard: 'Herramientas de desarrollo para React',
      links: [
        {
          type: LinkType.Store,
          url: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
        },
      ],
      cover: {
        src: '',
        height: 80,
        width: 80,
      },
      videos: [],
    },
  ],
}

export default chrome
