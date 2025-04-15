/* eslint-disable @next/next/no-img-element */
import { Cover } from '@/lib/db-types'
import { cn } from '@/lib/utils'

type FigureProps = {
  cover: Cover
  placeholder: string
  className?: string
  isSvg?: boolean
  id?: string
}

export const Figure = ({
  cover,
  placeholder,
  className,
  isSvg = true,
  id,
}: FigureProps) => {
  const hasCover = cover.src !== ''
  return (
    <figure>
      <img
        id={id}
        className={cn(className, {
          svg: isSvg,
        })}
        alt={placeholder}
        src={hasCover ? cover.src : '/ui/imgnotfound.svg'}
        width={hasCover ? cover.width : 40}
        height={hasCover ? cover.height : 40}
        style={{
          width: hasCover ? cover.width : 40,
          height: hasCover ? cover.height : 40,
        }}
      />
    </figure>
  )
}
