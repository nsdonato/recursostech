// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'

import { DARK_THEME, LIGHT_THEME } from '@/lib/constants'
import { EventNames } from '@/lib/metrics/event-name-types'

import { Figure } from '../figure/figure'

// @ts-nocheck

const ThemeController = () => {
  const [theme, setTheme] = useState(global.window?.__theme || LIGHT_THEME)

  const isDark = theme === DARK_THEME

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(
      theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    )
  }

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])

  return (
    <label className='swap swap-rotate mr-2'>
      <input
        data-umami-event={
          isDark
            ? EventNames.SWITCH_TO_LIGHT_MODE
            : EventNames.SWITCH_TO_DARK_MODE
        }
        id='theme-toggle'
        type='checkbox'
        value={isDark ? DARK_THEME : LIGHT_THEME}
        onClick={() => toggleTheme()}
      />

      <Figure
        cover={{
          src: isDark ? '/ui/sun.svg' : '/ui/moon.svg',
          width: 30,
          height: 30,
        }}
        placeholder={isDark ? 'sun' : 'moon'}
      />
    </label>
  )
}
export default ThemeController
