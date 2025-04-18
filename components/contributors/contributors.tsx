/* eslint-disable @next/next/no-img-element */
import { PageContributor } from '@/lib/db-types'
import { EventNames } from '@/lib/metrics/metrics-types'
import { getContributorsFromGitHub } from '@/services/get-contributors'

import { WebLink } from '../web-link/web-link'
import { getContributorsFromFile } from './contributors-utils'

type ContributorsProp = {
  contributors?: PageContributor[]
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
    data = getContributorsFromFile(contributors)
  }

  return (
    <div className='card bg-base-100 shadow-lg ring-1 mt-4 p-4 w-full'>
      <h2 className='card-title mb-4 text-xl'>Colaboradores</h2>
      <p className='mb-4'>
        Gracias a todxs los que aportaron en{' '}
        {isIndex ? 'este proyecto' : 'esta sección!'} ✨
      </p>
      <ul className='flex flex-wrap gap-2'>
        {data.map(contributor => {
          return (
            <li key={`contributor-${contributor.name}`}>
              <WebLink
                href={contributor.profile}
                eventName={`${EventNames.CLICK_ON_GH_CONTRIBUTOR} - ${contributor.name}`}>
                <img
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
