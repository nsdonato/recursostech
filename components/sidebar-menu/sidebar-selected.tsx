'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function LinkWrapper({
  href,
  children,
  className,
}: LinkWrapperProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(className, {
        'border border-separate selected-submenu': pathname === href,
      })}>
      {children}
    </Link>
  )
}
