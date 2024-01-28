import { ContributorSchema } from './github-types'

const GH_URL = 'https://api.github.com/repos/nsdonato/recursostech/contributors'

export const getContributorsFromGitHub = async (): Promise<
  ContributorSchema[] | []
> => {
  const res = await fetch(GH_URL, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch API')
  }

  const response = await res.json()
  const contributors = response.map((contributor: any) => {
    return {
      id: contributor.id,
      name: contributor.login,
      avatar: contributor.avatar_url,
      profile: contributor.html_url,
      contributions: contributor.contributions,
    }
  })

  return contributors
}
