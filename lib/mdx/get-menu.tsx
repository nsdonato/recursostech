import { z } from 'zod'

import { getMdxData } from './mdx-utils'

export const schema = z.array(
  z.object({
    name: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      })
    ),
  })
)

export async function getMenu() {
  const mdxData = await getMdxData('./docs/menu.mdx')

  const parsedData = schema.parse(mdxData.data)

  return {
    ...mdxData,
    data: parsedData,
  }
}
