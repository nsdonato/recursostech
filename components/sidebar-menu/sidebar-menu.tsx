import { getMenu } from '@/lib/mdx/get-menu'

import { Details } from '../details'
import LinkWrapper from './sidebar-selected'

type SidebarMenuProps = {
  className?: string
}

export const SidebarMenu = async ({ className }: SidebarMenuProps) => {
  const { data: menu } = await getMenu()

  return (
    <nav className={className} id='top'>
      <ul className='menu rounded-box shadow-lg grid gap-1'>
        <li>
          <LinkWrapper href='/'>Inicio</LinkWrapper>
        </li>
        {menu.map(menuItem => (
          <li key={menuItem.name}>
            <Details menuItem={menuItem} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
