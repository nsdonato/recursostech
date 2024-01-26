import Image from 'next/image'

import { Contributor } from '@/lib/mdx/mdx-utils'

type ContributorsProp = {
	contributors: Contributor[] | []
}

export const Contributors = ({ contributors }: ContributorsProp) => {
	if (!contributors?.length) {
		return null
	}

	return (
		<div className='card bg-base-100 shadow-lg ring-1 mt-4 p-4 w-fit'>
			<h3 className='card-title mb-4'>Colaboradores</h3>
			<p className='mb-4'>
				Gracias a todxs los que aportaron en este documento! ✨
			</p>
			<ul>
				{contributors.map(({ github_username }) => {
					return (
						<li key={`contributor-${github_username}`}>
							<a
								href={`https://github.com/${github_username}`}
								target='_blank'
								rel='noreferrer'>
								<Image
									loading='lazy'
									src={`https://github.com/${github_username}.png?size=80`}
									width='40'
									height='40'
									alt={`Usuarix contribuidxr - ${github_username}`}
									className='rounded-full'
								/>
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
