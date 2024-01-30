import { z } from 'zod'

import { getCreationDate, getUpdatedDate } from '../file-utils'
import { getMdxData } from './mdx-utils'

export const schema = z.array(
  z.object({
    name: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        isCreated: z.optional(z.boolean()),
        isUpdated: z.optional(z.boolean()),
      })
    ),
  })
)

export async function getMenu() {
  const mdxData = await getMdxData('./docs/menu.mdx')

  const parsedData = schema.parse(mdxData.data)

  const final = parsedData.map(menuItem => {
    return {
      name: menuItem.name,
      items: menuItem.items.map(at => {
        return {
          ...at,
          isCreated: getCreationDate(at.url),
          isUpdated: getUpdatedDate(at.url),
        }
      }),
    }
  })

  return {
    ...mdxData,
    data: final,
  }
}
