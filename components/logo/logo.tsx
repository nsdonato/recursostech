import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

function Logo({ className }: { className?: string }) {
	return (
		<Link href='/'>
			<Image
				src='/vamoacodear_logo.png'
				width={200}
				height={200}
				alt='Logo de vamoacodear'
				className={className}
			/>
		</Link>
	)
}

export default Logo
