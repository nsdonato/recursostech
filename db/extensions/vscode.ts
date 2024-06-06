import { DocPage, LinkType } from '@/lib/db-types'

const vscode: DocPage = {
  title: 'Extensions',
  description: [
    'Extensiones para que tu día a día con Visual Studio Code, sea más productivo.',
  ],
  contributors: [
    { github_username: 'nsdonato' },
    { github_username: 'Victorioo' },
    { github_username: 'guskpo20' },
    { github_username: 'ricardomaldonado93' },
    { github_username: 'eduWTR' },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Easy Snippet',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/easy-snippet.no-invert.svg',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=inu1255.easy-snippet',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Prettier - Code formatter',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/prettier.no-invert.svg',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://prettier.io/',
        },
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        },
      ],
      videos: [
        {
          tooltip: 'Como configurar ESLint y Prettier en VSCode',
          url: 'https://youtu.be/WjkolcG8oVk',
        },
      ],
    },
    {
      imgPlaceholder: 'ESLint',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/eslint-logo.no-invert.svg',
        height: 60,
        width: 200,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://eslint.org/',
        },
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
        },
      ],
      videos: [
        {
          tooltip: 'Como configurar ESLint y Prettier en VSCode',
          url: 'https://youtu.be/WjkolcG8oVk',
        },
        {
          tooltip: 'Agregá ESLint a tu proyecto (Paquete y extensión)',
          url: 'https://youtu.be/LtSi00v6txI',
        },
      ],
    },
    {
      imgPlaceholder: 'Live Server',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/live-server.no-invert.svg',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Auto Import',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/auto-import-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=steoates.autoimport',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Console Ninja',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/console-ninja.no-invert.svg',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja',
        },
        {
          type: LinkType.Web,
          url: 'https://console-ninja.com/',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Conventional Commits',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/conventional-commits.no-invert.svg',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'GitLens - Git supercharged',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/gitlens-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        },
        {
          type: LinkType.Web,
          url: 'https://www.gitkraken.com/gitlens',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Image preview',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/image-preview-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Import Cost',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/import-cost-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Live Preview',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/live-preview-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Paste JSON as Code',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/quicktype.no-invert.svg',
        height: 80,
        width: 190,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Pretty TypeScript Errors',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/pretty-typescript-errors-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Version Lens',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/versionlens-icon.png',
        height: 70,
        width: 70,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Tailwind CSS IntelliSense',
      titleCard: '/extensions/vscode/tailwindcss-intellisense-icon.png',
      cover: {
        src: '',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Regex Previewer',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/regex-previewer-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=chrmarti.regex',
        },
      ],
      videos: [
        {
          tooltip: 'Regex Previewer',
          url: 'https://www.youtube.com/watch?v=u6Eesv7aqHo&ab_channel=CoolITHelp',
        },
      ],
    },
    {
      imgPlaceholder: 'Turbo Console Log',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/turbo-console-icon.png',
        height: 70,
        width: 70,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log',
        },
      ],
      videos: [
        {
          tooltip: 'Turbo Console Log',
          url: 'https://www.youtube.com/shorts/97ZuQdLauNU',
        },
      ],
    },
    {
      imgPlaceholder: 'Code Spell Checker',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/spellcheck-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'Colorize',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/colorize.no-invert.svg',
        height: 90,
        width: 150,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize',
        },
      ],
      videos: [],
    },
    {
      imgPlaceholder: 'DotENV',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/dotenv-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv',
        },
      ],
    },
    {
      imgPlaceholder: 'Duckly',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/duckly.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=gitduck.code-streaming',
        },
        {
          type: LinkType.Web,
          url: 'https://duckly.com/',
        },
      ],
    },
    {
      imgPlaceholder: 'Error Lens',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/error-lens-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens',
        },
      ],
    },
    {
      imgPlaceholder: 'ES7+ React/Redux/React-Native snippets',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/es7-react-js-icon.png',
        height: 80,
        width: 120,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets',
        },
      ],
    },
    {
      imgPlaceholder: 'Excalidraw',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/excalidraw-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor',
        },
      ],
    },
    {
      imgPlaceholder: 'Figma',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/figma.no-invert.svg',
        height: 45,
        width: 45,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension',
        },
        {
          type: LinkType.Web,
          url: 'https://www.figma.com/',
        },
      ],
    },
    {
      imgPlaceholder: 'Git File History',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/git-file-history-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=pomber.git-file-history',
        },
      ],
    },
    {
      imgPlaceholder: 'Git Graph',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/git-graph.no-invert.svg',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph',
        },
      ],
    },
    {
      imgPlaceholder: 'GitHub Copilot',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/github-copilot.svg',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot',
        },
        {
          type: LinkType.Web,
          url: 'https://github.com/features/copilot',
        },
      ],
    },
    {
      imgPlaceholder: 'GitHub Copilot Chat',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/github-copilot.svg',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat',
        },
      ],
    },
    {
      imgPlaceholder: 'AWS Toolkit - Amazon Q, CodeWhisperer, and more',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/aws-icon.png',
        height: 80,
        width: 80,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=amazonwebservices.aws-toolkit-vscode',
        },
      ],
    },
    {
      imgPlaceholder: 'Tabnine',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/tabnine.no-invert.svg',
        height: 50,
        width: 150,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode',
        },
        {
          type: LinkType.Web,
          url: 'https://www.tabnine.com/',
        },
      ],
    },
    {
      imgPlaceholder: 'Codeium',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/codeium-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=Codeium.codeium',
        },
        {
          type: LinkType.Web,
          url: 'https://codeium.dev/',
        },
      ],
    },
    {
      imgPlaceholder: 'GitHub Actions',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/github-actions-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions',
        },
      ],
    },
    {
      imgPlaceholder: 'GitHub Pull Requests and Issues',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/github-pull-requests-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github',
        },
      ],
    },
    {
      imgPlaceholder: 'Highlight Matching Tag',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/highlight-matching-tag-icon.png',
        height: 60,
        width: 60,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag',
        },
      ],
    },
    {
      imgPlaceholder: 'Jest Run It',
      titleCard: '',
      cover: {
        src: '/extensions/vscode/jest-run-it-icon.png',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=vespa-dev-works.jestRunIt',
        },
      ],
    },
    {
      imgPlaceholder: 'Jira and Bitbucket',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=atlassian.atlascode',
        },
      ],
    },
    {
      imgPlaceholder: 'Just Files',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=palaso.just-files',
        },
      ],
    },
    {
      imgPlaceholder: 'Mintlify Doc Writer',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=mintlify.document',
        },
      ],
    },
    {
      imgPlaceholder: 'Peacock',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock',
        },
      ],
    },
    {
      imgPlaceholder: 'Postman',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode',
        },
      ],
    },
    {
      imgPlaceholder: 'Reload',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=natqe.reload',
        },
      ],
    },
    {
      imgPlaceholder: 'Simple React Snippets',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets',
        },
      ],
    },
    {
      imgPlaceholder: 'Snippets simple Next.js 13',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=yuzu.snippets-next-13',
        },
      ],
    },
    {
      imgPlaceholder: 'SonarLint',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode',
        },
      ],
    },
    {
      imgPlaceholder: 'Split HTML Attributes (Vue, React, Angular)',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=dannyconnell.split-html-attributes',
        },
      ],
    },
    {
      imgPlaceholder: 'Tailwind Documentation',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=alfredbirk.tailwind-documentation',
        },
      ],
    },
    {
      imgPlaceholder: 'Todo Tree',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree',
        },
      ],
    },
    {
      imgPlaceholder: 'vscode-styled-components',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components',
        },
      ],
    },
    {
      imgPlaceholder: 'Auto Rename Tag',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
        },
      ],
    },
    {
      imgPlaceholder: 'axe Accessibility Linter',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter',
        },
      ],
    },
    {
      imgPlaceholder: 'Better Comments',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
        },
      ],
    },
    {
      imgPlaceholder: 'Bookmarks',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks',
        },
      ],
    },
    {
      imgPlaceholder: 'Browse Lite',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=antfu.browse-lite',
        },
      ],
    },
    {
      imgPlaceholder: 'Change String Case',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=maximus136.change-string-case',
        },
      ],
    },
    {
      imgPlaceholder: 'Class autocomplete for HTML',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=AESSoft.aessoft-class-autocomplete',
        },
      ],
    },
    {
      imgPlaceholder: 'CodeSnap',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap',
        },
      ],
    },
    {
      imgPlaceholder: 'CSS Modules',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules',
        },
      ],
    },
    {
      imgPlaceholder: 'Project Manager',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager',
        },
      ],
    },
    {
      imgPlaceholder: 'React Create Component',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=JavierGutierrez.create-component-React',
        },
      ],
    },
    {
      imgPlaceholder: 'YAML',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml',
        },
      ],
    },
    {
      imgPlaceholder: 'Astro',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode',
        },
      ],
    },
    {
      imgPlaceholder: 'Footsteps',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=Wattenberger.footsteps',
        },
      ],
    },
    {
      imgPlaceholder: 'GraphQL',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=mquandalle.graphql',
        },
      ],
    },
    {
      imgPlaceholder: 'Lit Plugin',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin',
        },
      ],
    },
    {
      imgPlaceholder: 'Lorem Text Generator',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=oguzhanyildiz.lorem-text-generator',
        },
      ],
    },
    {
      imgPlaceholder: 'Qwik, Qwik City, Mitosis, & Partytown Snippets',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=johnreemar.vscode-qwik-snippets',
        },
      ],
    },
    {
      imgPlaceholder: 'Qwik City <Link href> autocomplete',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=raiondesu.qwik-city-link-autocomplete',
        },
      ],
    },
    {
      imgPlaceholder: 'SCSS Formatter',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter',
        },
      ],
    },
    {
      imgPlaceholder: 'Template String Converter',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter',
        },
      ],
    },
    {
      imgPlaceholder: 'Total TypeScript',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.totaltypescript.com/vscode-extension',
        },
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator',
        },
      ],
    },
    {
      imgPlaceholder: 'TypeScript Importer',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter',
        },
      ],
    },
    {
      imgPlaceholder: 'Vetur',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=octref.vetur',
        },
      ],
    },
    {
      imgPlaceholder: 'Vue Language Features (Volar)',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=Vue.volar',
        },
      ],
    },
    {
      imgPlaceholder: 'Prettier ESLint',
      titleCard: '',
      cover: {
        src: '',
        height: 50,
        width: 50,
      },
      links: [
        {
          type: LinkType.Marketplace,
          url: 'https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint',
        },
      ],
    },
  ],
}

export default vscode
