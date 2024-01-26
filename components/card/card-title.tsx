import { InfoExtra } from '@/lib/mdx/get-menu-item'

import { getConferenceInfo } from './card-utils'

type CardTitleProps = {
	title?: string
	infoExtra?: InfoExtra
}

export const CardTitle = ({ title, infoExtra }: CardTitleProps) => (
	<p className='py-1 truncate'>
		{infoExtra ? getConferenceInfo(infoExtra) : title}
	</p>
)
