import { Cover } from '@/lib/db-types'

import { Figure } from '../figure/figure'

type CardBodyProps = {
  cover: Cover
  imgPlaceholder: string
}

export const CardBody = ({ cover, imgPlaceholder }: CardBodyProps) => {
  const isSvg = cover.src ? cover.src.includes('.svg') : true
  const srcSplit = cover.src.split('/')
  const srcName = srcSplit[srcSplit.length - 1].replace(/[\/.\b](svg|png)/g, '')

  return (
    <div
      key={imgPlaceholder}
      className='tooltip tooltip-sm'
      data-tip={imgPlaceholder}>
      <div className='card-body items-center justify-center h-40 w-full'>
        <Figure
          isSvg={isSvg}
          cover={cover}
          placeholder={imgPlaceholder}
          id={srcName}
        />
      </div>
    </div>
  )
}
