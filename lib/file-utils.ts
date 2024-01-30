import fs from 'fs/promises'
import path from 'path'

import { isToday, isUpdated } from './date-utils'

export const readFile = (localPath: string) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}

export const getCreationDate = async (localPath: string) => {
  const stats = await fs.stat(path.join(process.cwd(), localPath + '.mdx'))
  return isToday(stats.birthtime)
}

export const getUpdatedDate = async (localPath: string) => {
  const stats = await fs.stat(path.join(process.cwd(), localPath + '.mdx'))
  return isUpdated(stats.mtime)
}
