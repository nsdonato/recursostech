'use client'

import React from 'react'

import '@docsearch/css'
import { DocSearch } from '@docsearch/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { EventNames } from '@/lib/metrics/event-name-types'

import { Figure } from '../figure/figure'
import { WebLink } from '../web-link/web-link'

const ThemeController = dynamic(
  () => import('../theme-controller/theme-controller'),
  {
    ssr: false,
  }
)

export const SEARCH_API_KEY = process.env.NEXT_PUBLIC_AL_API_KEY || ''
export const SEARCH_APP_ID = process.env.NEXT_PUBLIC_AL_APP_ID || ''
export const SHOW_SEARCH = process.env.NEXT_PUBLIC_FF_SEARCH

function NavBar() {
  return (
    <nav className='navbar bg-base-100 flex justify-between items-center shadow-lg'>
      <Link className='btn btn-ghost text-xl' href='/'>
        RecursosTech
      </Link>
      <div>
        {SHOW_SEARCH === 'enabled' && (
          <DocSearch
            apiKey={SEARCH_API_KEY}
            indexName={'recursostech'}
            appId={SEARCH_APP_ID}
          />
        )}
      </div>
      <div className='items-start md:mr-2'>
        <ThemeController />
        <WebLink
          href='https://github.com/nsdonato/recursostech'
          eventName={EventNames.CLICK_ON_GO_TO_GITHUB_REPO}>
          <Figure
            cover={{
              src: '/ui/github.svg',
              width: 30,
              height: 30,
            }}
            placeholder='github'
          />
        </WebLink>
      </div>
    </nav>
  )
}

export default NavBar
