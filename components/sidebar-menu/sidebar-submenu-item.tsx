import { SidebarMenuItem } from '@/components/sidebar-menu/sidebar-menu-item'
import { SubmenuItem } from '@/components/sidebar-menu/sidebar-types'

type SidebarSubMenuItemProps = {
	submenu: SubmenuItem
}

export const SidebarSubMenuItem = ({ submenu }: SidebarSubMenuItemProps) => {
	return (
		<li>
			<details>
				<summary>{submenu.name}</summary>
				<ul>
					<SidebarMenuItem items={submenu.items} />
				</ul>
			</details>
		</li>
	)
}
