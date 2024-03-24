import { DocPage } from './db-types'

export const getSubMenuData = (menu: string, submenu: string): DocPage => {
  return require(`../db/${menu}/${submenu}`).default
}
