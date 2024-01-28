import { Contributor } from '@/lib/mdx/mdx-utils'

import { ContributorSchema } from './github-types'

export const adaptContributorsFromMdx = (
  contributors: Contributor[]
): ContributorSchema[] => {
  if (!Boolean(contributors?.length)) return []

  const data = contributors?.map(({ github_username }, index) => {
    return {
      id: index,
      name: github_username,
      avatar: `https://github.com/${github_username}.png?size=80`,
      profile: `https://github.com/${github_username}`,
      contributions: 0,
    }
  })

  return data
}
