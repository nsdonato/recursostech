type WebLinkProps = {
	children: React.ReactNode
	href: string
	className?: string
}

export const WebLink = ({ children, href, className }: WebLinkProps) => (
	<a
		href={href}
		className={className}
		target='_blank'
		rel='noopener noreferrer'>
		{children}
	</a>
)
