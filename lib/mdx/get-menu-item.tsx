import { z } from 'zod'

import { contributorSchema, getMdxData } from './mdx-utils'

const figureSchema = z.object({
	src: z.string(),
	width: z.number(),
	height: z.number(),
})

const videoSchema = z.array(
	z.object({
		url: z.string(),
		tooltip: z.string(),
	})
)

const LinkTypeSchemaEnum = z.enum([
	'Web',
	'X',
	'Twitch',
	'Market',
	'Discord',
	'Ig',
])

const linkSchema = z.array(
	z.object({
		url: z.string(),
		type: LinkTypeSchemaEnum,
	})
)

const infoExtraConferenceSchema = z.object({
	country: z.string(),
	city: z.string(),
	date: z.object({
		month: z.string(),
		days: z.array(z.string()),
	}),
})

const subMenuSchema = z.array(
	z.object({
		imgPlaceholder: z.string(),
		titleCard: z.optional(z.string()),
		cover: figureSchema,
		links: linkSchema.default([]),
		videos: videoSchema.default([]),
		createdAt: z.string(),
		updatedAt: z.string(),
		infoExtra: z.optional(infoExtraConferenceSchema),
	})
)

export type Figure = z.infer<typeof figureSchema>
export type Video = z.infer<typeof videoSchema>
export type Link = z.infer<typeof linkSchema>
export type InfoExtra = z.infer<typeof infoExtraConferenceSchema>
export type SubMenu = z.infer<typeof subMenuSchema>

const parsedDataSchema = z.object({
	title: z.string(),
	description: z.string(),
	contributors: z.array(contributorSchema),
	submenu: subMenuSchema,
})

export type ParsedData = z.infer<typeof parsedDataSchema>

export async function getMenuItem(slug: string[]) {
	const filePath = slug.join('/')

	if (filePath.includes('favicon')) {
		return {
			data: null,
		}
	}
	const mdxData = await getMdxData(`./${filePath}.mdx`)

	const parsedData = parsedDataSchema.parse(mdxData.data)

	return {
		...mdxData,
		data: parsedData,
	}
}
