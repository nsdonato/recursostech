import { ButtonUp } from 'components/button/button-up'
import Navbar from 'components/navbar/navbar'
import { SidebarMenu } from 'components/sidebar-menu/sidebar-menu'
import type { Metadata } from 'next'
import Script from 'next/script'

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
  const UMAMI_ANALYTICS = process.env.NEXT_PUBLIC_ANALYTICS_ID
  const environment = process.env.NODE_ENV

  return (
    <html lang='es' className={'font-popi font-popi-light'}>
      <head>
        <Script
          id='data-theme'
          dangerouslySetInnerHTML={{ __html: getTheme }}
        />
        {environment === 'production' && (
          <Script
            id='umami'
            defer
            src='https://eu.umami.is/script.js'
            data-website-id={UMAMI_ANALYTICS}
          />
        )}
      </head>
      <body>
        <Navbar />
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-6 mt-4'>
          <SidebarMenu className='' />
          <main className='p-4 lg:col-span-5 DocSearch-content'>
            {children}
          </main>
        </div>
        <ButtonUp />
      </body>
    </html>
  )
}
