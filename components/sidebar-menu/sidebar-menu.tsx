import { SidebarMenuItem } from '@/components/sidebar-menu/sidebar-menu-item'
import { SidebarSubMenuItem } from '@/components/sidebar-menu/sidebar-submenu-item'
import { SubmenuItem } from '@/components/sidebar-menu/sidebar-types'
import { MAIN_MENU } from '@/lib/constants'
import { getMenu } from '@/lib/mdx/get-menu'

import LinkWrapper from './sidebar-selected'

type SidebarMenuProps = {
	className?: string
}

export const SidebarMenu = async ({ className }: SidebarMenuProps) => {
	const {
		data: { menu },
	} = await getMenu()

	return (
		<nav className={className}>
			<ul className='menu rounded-box shadow-lg'>
				{menu.map(menuItem => (
					<li key={menuItem.name}>
						{menuItem.name === MAIN_MENU ? (
							<LinkWrapper href='/'> {menuItem.name}</LinkWrapper>
						) : (
							<details open>
								<summary>{menuItem.name}</summary>
								<ul>
									{menuItem.items?.length === 1 ? (
										<SidebarMenuItem items={[]} />
									) : (
										menuItem.items?.map((submenu, index: number) => (
											<SidebarSubMenuItem
												submenu={submenu as SubmenuItem}
												key={index}
											/>
										))
									)}
								</ul>
							</details>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
