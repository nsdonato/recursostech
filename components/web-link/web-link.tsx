type WebLinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  target?: string
}

export const WebLink = ({
  children,
  href,
  className,
  target = '_blank',
}: WebLinkProps) => (
  <a
    href={href}
    className={className}
    target={target}
    rel='noopener noreferrer'>
    {children}
  </a>
)
