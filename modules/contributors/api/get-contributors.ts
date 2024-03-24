import { Contributor } from 'modules/contributors/models/contributor'

import { adaptContributors } from './get-contributors.adapter'

const GH_URL = 'https://api.github.com/repos/nsdonato/recursostech/contributors'

export const getContributorsFromGitHub = async (): Promise<
  Contributor[] | []
> => {
  const res = await fetch(GH_URL, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch API')
  }

  const response = await res.json()
  return response.map(adaptContributors)
}
