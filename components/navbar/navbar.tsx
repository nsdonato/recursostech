import React from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Figure } from '../figure/figure'
import { WebLink } from '../web-link/web-link'

const ThemeController = dynamic(
	() => import('../theme-controller/theme-controller'),
	{
		ssr: false,
	}
)

function NavBar() {
	return (
		<nav className='navbar bg-base-100 flex justify-between items-center shadow-lg'>
			<Link className='btn btn-ghost text-xl' href='/'>
				RecursosTech
			</Link>
			<div className='items-start md:mr-2'>
				<ThemeController />
				<WebLink href='https://github.com/nsdonato/recursostech'>
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
