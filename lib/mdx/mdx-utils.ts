import matter from 'gray-matter'
import { z } from 'zod'

import { readFile } from '../file-utils'

interface MdxData {
	data: unknown
	source: string
	matter: string
}

/**
 * Do not use this function outside the `lib/mdx/` dir,
 * instead create a new function that uses this one
 */
export async function getMdxData(filePath: string): Promise<MdxData> {
	const rawContent = await readFile(filePath)
	const result = matter(rawContent)

	if (!result.data) {
		throw new Error(`No data found for ${filePath}`)
	}

	return {
		data: result.data,
		source: result.content,
		matter: result.matter,
	}
}

export const contributorSchema = z.object({
	github_username: z.string(),
})

export type Contributor = z.infer<typeof contributorSchema>
