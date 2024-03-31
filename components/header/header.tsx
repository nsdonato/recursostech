type HeaderProps = {
  title: string
  description: string[]
  href?: string
}

export const Header = ({ title, description, href }: HeaderProps) => {
  return (
    <header>
      <h1 className='text-5xl font-bold mb-10 underline underline-offset-8 decoration-pink-500 block'>
        {title}
      </h1>
      {description.map((parrafo, index) => (
        <p key={index} className='text-balance last-of-type:pt-4'>
          {parrafo}
        </p>
      ))}
      {/* <p className='py-4 text-balance'>{description}</p> */}
    </header>
  )
}
