import { Figure as CoverType } from '@/lib/mdx/get-menu-item'

import { Figure } from '../figure/figure'

type CardBodyProps = {
	cover: CoverType
	imgPlaceholder: string
}

export const CardBody = ({ cover, imgPlaceholder }: CardBodyProps) => {
	const hasCover = Boolean(cover.src)
	const isSvg = cover.src.includes('.svg')
	const coverName = isSvg
		? cover.src.replace('.svg', '').split('/')[2]
		: cover.src.replace('.png', '').split('/')[2]
	return (
		<div
			key={imgPlaceholder}
			className='tooltip tooltip-sm'
			data-tip={imgPlaceholder}>
			<div className='card-body items-center justify-center h-40 w-full'>
				{hasCover ? (
					<Figure
						isSvg={isSvg}
						className={coverName}
						cover={cover}
						placeholder={imgPlaceholder}
					/>
				) : (
					<h2 className='card-title items-center justify-center h-40 w-full'>
						{imgPlaceholder}
					</h2>
				)}
			</div>
		</div>
	)
}
