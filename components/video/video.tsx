import Link from 'next/link'

import { Figure } from '../figure/figure'
import { Video as VideoType } from './video-types'

type VideoProps = {
	video: VideoType
}

export const Video = ({ video }: VideoProps) => {
	return (
		<div
			key={video.tooltip}
			className='tooltip tooltip-sm'
			data-tip={video.tooltip}>
			<Link
				className='flex gap-1 btn btn-sm btn-outline btn-accent'
				href={video.url}
				target='_blank'
				rel='noopener noreferrer'>
				<Figure
					cover={{
						src: '/socials/youtube.svg',
						width: 30,
						height: 30,
					}}
					className='youtube'
					placeholder={video.tooltip}
				/>
			</Link>
		</div>
	)
}
