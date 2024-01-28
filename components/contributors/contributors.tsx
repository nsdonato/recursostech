import Image from 'next/image'

import { Contributor } from '@/lib/mdx/mdx-utils'
import { WebLink } from '../web-link/web-link'

type ContributorsProp = {
	contributors: Contributor[] | []
}

export const Contributors = ({ contributors }: ContributorsProp) => {
	if (!contributors?.length) {
		return null
	}

	return (
		<div className='card bg-base-100 shadow-lg ring-1 mt-4 p-4 w-fit'>
			<h2 className='card-title mb-4 text-xl'>Colaboradores</h2>
			<p className='mb-4'>
				Gracias a todxs los que aportaron en este documento! ✨
			</p>
			<ul className='flex flex-wrap gap-2'>
				{contributors.map(({ github_username }) => {
					return (
						<li key={`contributor-${github_username}`}>
							<WebLink
								href={`https://github.com/${github_username}`}
								>
								<Image
									loading='lazy'
									src={`https://github.com/${github_username}.png?size=80`}
									width='40'
									height='40'
									alt={`Usuarix contribuidxr - ${github_username}`}
									className='rounded-full'
								/>
							</WebLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
