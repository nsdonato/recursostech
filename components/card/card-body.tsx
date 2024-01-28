import { Figure as CoverType } from '@/lib/mdx/get-menu-item'

import { Figure } from '../figure/figure'

type CardBodyProps = {
  cover: CoverType
  imgPlaceholder: string
}

export const CardBody = ({ cover, imgPlaceholder }: CardBodyProps) => {
  const isSvg = cover.src ? cover.src.includes('.svg') : true
  const coverName = isSvg
    ? cover.src.replace('.svg', '').split('/')[2]
    : cover.src.replace('.png', '').split('/')[2]

  console.log(cover.src)
  return (
    <div
      key={imgPlaceholder}
      className='tooltip tooltip-sm'
      data-tip={imgPlaceholder}>
      <div className='card-body items-center justify-center h-40 w-full'>
        <Figure
          isSvg={isSvg}
          className={coverName}
          cover={cover}
          placeholder={imgPlaceholder}
        />
      </div>
    </div>
  )
}
