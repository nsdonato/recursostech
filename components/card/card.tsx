import { Video } from '@/components/video/video'

import { WebLink } from '../web-link/web-link'
import { CardBody } from './card-body'
import { CardInformation } from './card-information'
import { CardTitle } from './card-title'
import { CardItem } from './card-types'

type CardProps = {
  item: CardItem
}

export const Card = ({ item }: CardProps) => {
  const { cover, imgPlaceholder, titleCard, infoExtra, links, videos } = item

  return (
    <div className='card p-4 ring-1 bg-base-100 shadow-lg h-auto'>
      <CardBody cover={cover} imgPlaceholder={imgPlaceholder} />
      <>
        <CardTitle title={imgPlaceholder} />
        <div className='divider m-0 p-0'></div>
        <CardInformation title={titleCard} infoExtra={infoExtra} />
        <div className='flex flex-wrap gap-2 pt-1'>
          {links?.map(({ url, type }, index) => (
            <WebLink
              key={index}
              className='btn btn-sm btn-outline btn-accent'
              href={url}>
              {type}
            </WebLink>
          ))}
          {videos?.map((video, index) => <Video key={index} video={video} />)}
        </div>
      </>
    </div>
  )
}
