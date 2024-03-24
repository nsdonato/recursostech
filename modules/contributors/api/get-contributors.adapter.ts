import { Contributor } from 'modules/contributors/models/contributor'

import { ContributorSchema } from './github-types'

export const adaptContributors = (
  contributor: ContributorSchema
): Contributor => {
  return {
    id: contributor.id,
    name: contributor.login,
    avatar: contributor.avatar_url,
    profile: contributor.html_url,
  }
}
