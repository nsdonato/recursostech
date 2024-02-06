import { readFile } from './file-utils'

describe('file-utils', () => {
  test('readFile', async () => {
    const content = await readFile('lib/file-utils.ts')
    expect(content).toBeTruthy()
  })
})
