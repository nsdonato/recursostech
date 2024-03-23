type WebLinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  target?: string
  title?: string
  eventName: string
}

export const WebLink = ({
  children,
  href,
  title,
  className,
  target = '_blank',
  eventName,
}: WebLinkProps) => (
  <a
    data-umami-event={eventName}
    href={href}
    title={title}
    className={className}
    target={target}
    rel='noopener noreferrer'>
    {children}
  </a>
)
