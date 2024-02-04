type WebLinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  target?: string
  title?:string
}

export const WebLink = ({
  children,
  href,
  title,
  className,
  target = '_blank',
}: WebLinkProps) => (
  <a
    href={href}
    title={title}
    className={className}
    target={target}
    rel='noopener noreferrer'>
    {children}
  </a>
)
