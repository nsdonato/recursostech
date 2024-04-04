'use client'

import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type SidebarDetailProps = {
  name: string
  children: React.ReactNode
}

export const SidebarDetails = ({ name, children }: SidebarDetailProps) => {
  const pathname = usePathname()
  const actualPath = pathname.split('/')[1]

  return (
    <details>
      <summary
        className={cn({
          'selected-menu': actualPath.includes(name.toLowerCase().slice(0, 5)),
        })}>
        {name}
      </summary>
      {children}
    </details>
  )
}
