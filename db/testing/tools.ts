import { DocPage, LinkType } from '@/lib/db-types'

const tools: DocPage = {
  title: 'Testing',
  description: ['Frameworks o herramientas para testing.'],
  contributors: [
    {
      github_username: 'nsdonato',
    },
    {
      github_username: 'charlyautomatiza',
    },
  ],
  pageItems: [
    {
      imgPlaceholder: 'Testing Library',
      titleCard: 'Testing Library',
      links: [
        {
          type: LinkType.Web,
          url: 'https://testing-library.com/',
        },
      ],
      cover: {
        src: '/testing/tools/testing-library.no-invert.png',
        height: 80,
        width: 70,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Jest',
      titleCard: 'Jest',
      links: [
        {
          type: LinkType.Web,
          url: 'https://jestjs.io/',
        },
      ],
      cover: {
        src: '/testing/tools/jest.no-invert.svg',
        height: 80,
        width: 70,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Vitest',
      titleCard: 'Vitest',
      links: [
        {
          type: LinkType.Web,
          url: 'https://vitest.dev/',
        },
      ],
      cover: {
        src: '/testing/tools/vitest.no-invert.svg',
        height: 80,
        width: 90,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Cypress',
      titleCard: 'Cypress',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.cypress.io/',
        },
      ],
      cover: {
        src: '/testing/tools/cypress.no-invert.svg',
        height: 70,
        width: 190,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Playwright',
      titleCard: 'Playwright',
      links: [
        {
          type: LinkType.Web,
          url: 'https://playwright.dev/',
        },
      ],
      cover: {
        src: '/testing/tools/playwright.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'WebdriverIO',
      titleCard: 'WebdriverIO',
      links: [
        {
          type: LinkType.Web,
          url: 'https://webdriver.io/',
        },
      ],
      cover: {
        src: '/testing/tools/webdriverio.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Pytest',
      titleCard: 'Pytest',
      links: [
        {
          type: LinkType.Web,
          url: 'https://docs.pytest.org/',
        },
      ],
      cover: {
        src: '/testing/tools/pytest.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Karate DSL',
      titleCard: 'Karate DSL',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.karatelabs.io/',
        },
      ],
      cover: {
        src: '/testing/tools/karate.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Postman',
      titleCard: 'Postman',
      links: [
        {
          type: LinkType.Web,
          url: 'https://www.postman.com/',
        },
      ],
      cover: {
        src: '/testing/tools/postman.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'Insomnia',
      titleCard: 'Insomnia',
      links: [
        {
          type: LinkType.Web,
          url: 'https://insomnia.rest/',
        },
      ],
      cover: {
        src: '/testing/tools/insomnia.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'K6',
      titleCard: 'K6',
      links: [
        {
          type: LinkType.Web,
          url: 'https://k6.io/',
        },
      ],
      cover: {
        src: '/testing/tools/k6.no-invert.svg',
        height: 80,
        width: 100,
      },
      videos: [],
    },
    {
      imgPlaceholder: 'JMeter',
      titleCard: 'JMeter',
      links: [
        {
          type: LinkType.Web,
          url: 'https://jmeter.apache.org/',
        },
      ],
      cover: {
        src: '/testing/tools/jmeter.no-invert.svg',
        height: 80,
        width: 60,
      },
      videos: [],
    },
  ],
}

export default tools
