import {
	Figure as FigureType,
	InfoExtra,
	Link as LinkType,
	Video as VideoType,
} from '@/lib/mdx/get-menu-item'

export type CardItem = {
	cover: FigureType
	links: LinkType
	videos: VideoType
	imgPlaceholder: string
	updatedAt: string
	createdAt: string
	titleCard?: string
	infoExtra?: InfoExtra
}
