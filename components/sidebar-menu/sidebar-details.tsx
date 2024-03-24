'use client'

import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type SidebarDetailProps = {
  name: string
  children: React.ReactNode
}

export const SidebarDetails = ({ name, children }: SidebarDetailProps) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <details>
      <summary
        className={cn({
          'selected-menu':
            name.toLowerCase().includes(pathname.split('/')[2]) ||
            pathname === '/',
        })}>
        {name}
      </summary>
      {children}
    </details>
  )
}
