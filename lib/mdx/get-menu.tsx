import { z } from 'zod'

import { getMdxData } from './mdx-utils'

export const schema = z.object({
	menu: z.array(
		z.union([
			z.object({ name: z.string(), items: z.array(z.unknown()) }),
			z.object({
				name: z.string(),
				items: z.array(
					z.object({
						name: z.string(),
						items: z.array(
							z.object({
								name: z.string(),
								url: z.string(),
								createdAt: z.string(),
								updatedAt: z.string(),
							})
						),
					})
				),
			}),
		])
	),
	contributors: z.array(z.object({ github_username: z.string() })),
})

export async function getMenu() {
	const mdxData = await getMdxData('./docs/menu.mdx')

	const parsedData = schema.parse(mdxData.data)
	return {
		...mdxData,
		data: parsedData,
	}
}
