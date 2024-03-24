import { Contributor } from 'modules/contributors/models/contributor'

import { PageContributor } from '@/lib/tdx-types'

export const getContributorsFromFile = (
  contributors: PageContributor[]
): Contributor[] => {
  if (!Boolean(contributors?.length)) return []

  const data = contributors?.map(({ github_username }, index) => {
    return {
      id: index,
      name: github_username,
      avatar: `https://github.com/${github_username}.png?size=80`,
      profile: `https://github.com/${github_username}`,
    }
  })

  return data
}
