import { DocPage, LinkType } from '@/lib/db-types'

const chrome: DocPage = {
  title: 'Extensiones',
  description: [
    'Extensiones para que tu día a día con Google Chrome, sea más productivo.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'eduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Dark Reader',
      titleCard: 'Modo oscuro para cualquier página web',
      links: [{ type: LinkType.Web, url: 'https://darkreader.org/' }],
      cover: {
        src: '/extensions/chrome/darkreader-logo.png',
        height: 60,
        width: 60,
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
        src: '/extensions/chrome/grammarly.no-invert.svg',
        height: 90,
        width: 160,
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
        src: '/extensions/chrome/json-viewer-pro-logo.png',
        height: 70,
        width: 70,
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
        src: '/extensions/chrome/react-developer-tools-logo.png',
        height: 60,
        width: 60,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Wappalyzer',
      titleCard: 'Tool favorita de los bisagritas tech',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.wappalyzer.com/',
        },
        {
          type: LinkType.Store,
          url: 'https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg',
        },
      ],
      cover: {
        src: '/extensions/chrome/wappalyzer-logo.png',
        height: 70,
        width: 70,
      },
      videos: [],
    },
  ],
}

export default chrome
