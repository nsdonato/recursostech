import clsx from 'clsx'

import { cn, getBadgeType } from '@/lib/utils'

export enum BadgeType {
	new = 'new',
	updated = 'updated',
	none = '',
}

type BadgeProp = {
	createdAt: string
	updatedAt: string
	className?: string
}

export const Badge = ({ createdAt, updatedAt, className }: BadgeProp) => {
	const badgeType = getBadgeType(new Date(createdAt), new Date(updatedAt))

	if (badgeType === BadgeType.none) return null

	return (
		<div
			className={cn(className, {
				'badge badge-outline badge-secondary': badgeType === BadgeType.new,
				'badge badge-outline badge-primary': badgeType === BadgeType.updated,
			})}>
			{badgeType}
		</div>
	)
}
