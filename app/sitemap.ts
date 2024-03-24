import { MetadataRoute } from 'next'

import { menu } from '../db/menu'

const WEBSITE_HOST_URL = process.env.SITE_URL || 'https://recursostech.dev'
// TODO
type changeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let { urls } = menu.reduce(
    (acc, menu) => {
      menu.items.forEach(item => {
        acc.urls.push(item.url)
      })
      return acc
    },
    { urls: [] as string[] }
  )
  const changeFrequency = 'daily' as changeFrequency

  const routes = ['', ...urls].map(url => {
    const path = url === '' ? '/docs/index' : url

    return {
      url: url === '' ? WEBSITE_HOST_URL : `${WEBSITE_HOST_URL}${path}`,
      lastModified: new Date(), // getUpdatedDate(path),
      changeFrequency,
    }
  })

  return [...routes]
}
