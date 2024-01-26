import { render } from '@/lib/test-utils'

import { Video } from './video'
import { Video as VideoType } from './video-types'

describe('Video', () => {
	it('should render a video', () => {
		const video: VideoType = {
			url: 'https://www.youtube.com/embed/6A5EpqqDOdk',
			tooltip: 'A video',
		}
		const { container } = render(<Video video={video} />)
		expect(container).toBeInTheDocument()
	})
})
