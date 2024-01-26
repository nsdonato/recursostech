import { z } from 'zod'

import { contributorSchema, getMdxData } from './mdx-utils'

const indexSchema = z.object({
	contributors: z.array(contributorSchema),
})

export type IndexData = z.infer<typeof indexSchema>

export async function getIndex() {
	const mdxData = await getMdxData('/docs/index.mdx')

	const parsedData = indexSchema.parse(mdxData.data)

	return {
		...mdxData,
		data: parsedData,
	}
}
