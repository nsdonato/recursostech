import { InfoExtra } from '@/lib/db-types'

import { getConferenceInfo } from './utils/card-utils'

type CardTitleProps = {
  title?: string
  infoExtra?: InfoExtra
  href: string
}

export const CardInformation = ({ title, infoExtra, href }: CardTitleProps) => (
  <p className='py-1 truncate text-sm'>
    <a className='pointer-events-none' href={`#${href}`}>
      {infoExtra ? getConferenceInfo(infoExtra) : title}
    </a>
  </p>
)
