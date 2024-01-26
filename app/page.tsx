import { MDXRemote } from 'next-mdx-remote/rsc'

import { Contributors } from '@/components/contributors/contributors'
import { Figure } from '@/components/figure/figure'
import { Header } from '@/components/header/header'
import { WebLink } from '@/components/web-link/web-link'
import { getIndex } from '@/lib/mdx/get-index'

export default async function Home() {
	const { data, source } = await getIndex()

	return (
		<div>
			<MDXRemote
				source={source}
				components={{
					Figure,
					li: props => <li className='' {...props} />,
					ul: props => <ul className='list-disc pl-6' {...props} />,
					p: props => <p className='py-4' {...props} />,
					WebLink,
					Header,
				}}
			/>
			<div className='divider'></div>
			<Contributors contributors={data?.contributors} />
		</div>
	)
}
