import { PageContributor } from '@/lib/db-types'

import { getContributorsFromFile } from '../contributors-utils'

describe('getContributorsFromFile()', () => {
  test('should return empty array if no contributors', () => {
    const contributors: PageContributor[] = []
    const result = getContributorsFromFile(contributors)
    expect(result).toEqual([])
  })

  test('should return contributors', () => {
    const contributors = [
      {
        github_username: 'nsdonato',
      },
    ]
    const result = getContributorsFromFile(contributors)
    expect(result).toEqual([
      {
        id: 0,
        name: 'nsdonato',
        avatar: 'https://github.com/nsdonato.png?size=80',
        profile: 'https://github.com/nsdonato',
      },
    ])
  })
})
