import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

export const readFile = (localPath: string) => {
  return fsPromises.readFile(path.join(process.cwd(), localPath), 'utf8')
}

export const getUpdatedDate = (localPath: string) => {
  const stats = fs.statSync(path.join(process.cwd(), localPath + '.mdx'))
  return stats.mtime
}
