import { menu } from '../../db/menu'
import { SidebarDetails } from './sidebar-details'
import LinkWrapper from './sidebar-selected'

type SidebarMenuProps = {
  className?: string
}

export const SidebarMenu = ({ className }: SidebarMenuProps) => {
  return (
    <nav className={className} id='top'>
      <ul className='menu rounded-box shadow-lg grid gap-1'>
        <li>
          <LinkWrapper href='/'>Inicio</LinkWrapper>
        </li>
        {menu.map(menuItem => (
          <li key={menuItem.name}>
            <SidebarDetails name={menuItem.name}>
              <ul className='grid gap-1'>
                {menuItem.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <LinkWrapper
                        href={item.url}
                        className='flex justify-between flex-wrap'>
                        {item.name}{' '}
                      </LinkWrapper>
                    </li>
                  )
                })}
              </ul>
            </SidebarDetails>
          </li>
        ))}
      </ul>
    </nav>
  )
}
