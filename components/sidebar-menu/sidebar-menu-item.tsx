import { Badge } from '@/components/badge/badge'
import { Item } from '@/components/sidebar-menu/sidebar-types'

import LinkWrapper from './sidebar-selected'

type SidebarMenuItemProps = {
	items: Item | []
}

export const SidebarMenuItem = ({ items }: SidebarMenuItemProps) => {
	return items.map((item, index) => {
		return (
			<li key={index}>
				<LinkWrapper href={item.url} className='flex justify-between flex-wrap'>
					{item.name}{' '}
					<Badge createdAt={item.createdAt} updatedAt={item.createdAt} />
				</LinkWrapper>
			</li>
		)
	})
}
