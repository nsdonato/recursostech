import fs from 'fs/promises'
import path from 'path'

export const readFile = (localPath: string) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}
