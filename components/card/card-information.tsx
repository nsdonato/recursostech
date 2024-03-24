import { InfoExtra } from '@/lib/tdx-types'

import { getConferenceInfo } from './card-utils'

type CardTitleProps = {
  title?: string
  infoExtra?: InfoExtra
}

export const CardInformation = ({ title, infoExtra }: CardTitleProps) => (
  <p className='py-1 truncate text-sm'>
    {infoExtra ? getConferenceInfo(infoExtra) : title}
  </p>
)
