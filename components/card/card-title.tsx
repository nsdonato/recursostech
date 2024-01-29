type CardTitleProps = {
  title: string
}

export const CardTitle = ({ title }: CardTitleProps) => (
  <p className='py-1 truncate'>{title}</p>
)
