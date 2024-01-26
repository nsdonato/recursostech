import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/navbar/navbar'
import { SidebarMenu } from '@/components/sidebar-menu/sidebar-menu'

import { getTheme } from '../lib/getTheme'

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
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-6'>
					<SidebarMenu className='' />
					<main className='p-4 lg:col-span-5'>{children}</main>
				</div>
				<Analytics />
			</body>
		</html>
	)
}
