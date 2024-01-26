import { getIndex } from './get-index'

describe('getIndex', () => {
	test('returns correct data', async () => {
		const { data } = await getIndex()
		expect(data.contributors).toEqual([
			{
				github_username: 'nsdonato',
			},
		])
	})
})
