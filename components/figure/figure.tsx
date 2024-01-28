import Image from 'next/image'

import { Figure as CoverType } from '@/lib/mdx/get-menu-item'
import { cn } from '@/lib/utils'

type FigureProps = {
  cover: CoverType
  placeholder: string
  className?: string
  isSvg?: boolean
}

export const Figure = ({
  cover,
  placeholder,
  className,
  isSvg = true,
}: FigureProps) => {
  const hasCover = cover.src !== ''
  return (
    <figure>
      <Image
        className={cn(className, {
          'rounded-full': !isSvg,
        })}
        id={isSvg ? 'svg' : ''}
        alt={placeholder}
        src={hasCover ? cover.src : '/ui/imgnotfound.svg'}
        width={hasCover ? cover.width : 40}
        height={hasCover ? cover.height : 40}
      />
    </figure>
  )
}
