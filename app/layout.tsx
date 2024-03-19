import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import { ButtonUp } from '@/components/button/button-up'
import Navbar from '@/components/navbar/navbar'
import { SidebarMenu } from '@/components/sidebar-menu/sidebar-menu'

import { getTheme } from '../lib/get-theme'

import './globals.css'

export const metadata: Metadata = {
  title: 'Recursos Tech',
  description: 'Recursos tech para la comunidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className={'font-popi font-popi-light'}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body>
        <Navbar />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-6 mt-4'>
          <SidebarMenu className='' />
          <main className='p-4 lg:col-span-5 DocSearch-content'>
            {children}
          </main>
        </div>
        <Analytics />
        <ButtonUp />
      </body>
    </html>
  )
}
