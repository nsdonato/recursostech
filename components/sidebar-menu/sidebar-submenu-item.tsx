import { SidebarMenuItem } from '@/components/sidebar-menu/sidebar-menu-item'
import { SubmenuItem } from '@/components/sidebar-menu/sidebar-types'

type SidebarSubMenuItemProps = {
	submenu: SubmenuItem
}

export const SidebarSubMenuItem = ({ submenu }: SidebarSubMenuItemProps) => {
	return (
		<li className='grid gap-1'>
			<details>
				<summary>{submenu.name}</summary>
				<ul className='grid gap-1'>
					<SidebarMenuItem items={submenu.items} />
				</ul>
			</details>
		</li>
	)
}
