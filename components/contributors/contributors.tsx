import Image from 'next/image'

import { Contributor } from '@/lib/mdx/mdx-utils'
import { EventNames } from '@/lib/metrics/event-name-types'
import { adaptContributorsFromMdx } from '@/services/github/adapters'
import { getContributorsFromGitHub } from '@/services/github/get-contributors'

import { WebLink } from '../web-link/web-link'

type ContributorsProp = {
  contributors?: Contributor[]
  isIndex?: boolean
}

export const Contributors = async ({
  contributors = [],
  isIndex = false,
}: ContributorsProp) => {
  let data = []

  if (isIndex) {
    data = await getContributorsFromGitHub()
  } else {
    data = adaptContributorsFromMdx(contributors)
  }

  return (
    <div className='card bg-base-100 shadow-lg ring-1 mt-4 p-4 w-fit'>
      <h2 className='card-title mb-4 text-xl'>Colaboradores</h2>
      <p className='mb-4'>
        Gracias a todxs los que aportaron en este{' '}
        {isIndex ? 'proyecto' : 'documento!'} ✨
      </p>
      <ul className='flex flex-wrap gap-2'>
        {data.map(contributor => {
          return (
            <li key={`contributor-${contributor.name}`}>
              <WebLink
                href={contributor.profile}
                eventName={`${EventNames.CLICK_ON_GH_CONTRIBUTOR} - ${contributor.name}`}>
                <Image
                  data-testid={`contributor-${contributor.name}`}
                  loading='lazy'
                  src={contributor.avatar}
                  width='40'
                  height='40'
                  alt={`Usuarix contribuidxr - ${contributor.name}`}
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
