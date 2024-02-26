'use client'

import { useRouter } from 'next/navigation'

import LinkWrapper from './sidebar-menu/sidebar-selected'

type DetailsProps = {
  menuItem: {
    name: string
    items: {
      name: string
      url: string
    }[]
  }
}
export const Details = ({ menuItem }: DetailsProps) => {
  const router = useRouter()
  return (
    <details
      onToggle={() => router.push(`/docs/${menuItem.name.toLowerCase()}`)}>
      <summary>{menuItem.name}</summary>
      <ul className='grid gap-1'>
        {menuItem.items.map((item, index) => {
          return (
            <li key={index}>
              <LinkWrapper
                href={item.url}
                className='flex justify-between flex-wrap'>
                {item.name}{' '}
              </LinkWrapper>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
