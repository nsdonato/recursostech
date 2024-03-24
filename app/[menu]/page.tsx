import { Header } from '@/components/header/header'

type MenuPageProps = {
  params: {
    menu: string
  }
}

export default function MenuPage({ params }: MenuPageProps) {
  return (
    <>
      <Header title={params.menu} description={['Proximamente...']} />
    </>
  )
}
