import { MetadataRoute } from 'next'

import { getUpdatedDate } from '@/lib/file-utils'
import { getDocs } from '@/lib/mdx/get-menu'

const WEBSITE_HOST_URL = process.env.SITE_URL || 'https://recursostech.dev'

type changeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let { urls } = await getDocs()
  const changeFrequency = 'daily' as changeFrequency

  const routes = ['', ...urls].map(url => {
    const path = url === '' ? '/docs/index' : url

    return {
      url: url === '' ? WEBSITE_HOST_URL : `${WEBSITE_HOST_URL}${path}`,
      lastModified: getUpdatedDate(path),
      changeFrequency,
    }
  })

  return [...routes]
}
