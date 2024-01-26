import { WidthIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { Figure as CoverType } from '@/lib/mdx/get-menu-item'
import { cn } from '@/lib/utils'

type FigureProps = {
	cover: CoverType
	placeholder: string
	className?: string
	isSvg?: boolean
}

export const Figure = ({
	cover,
	placeholder,
	className,
	isSvg = true,
}: FigureProps) => {
	return (
		<figure>
			<Image
				className={cn(className, {
					'rounded-full': !isSvg,
				})}
				id={isSvg ? 'svg' : ''}
				alt={placeholder}
				src={cover}
				width={cover.width}
				height={cover.height}
			/>
		</figure>
	)
}
