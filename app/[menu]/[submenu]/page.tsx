import { ButtonUp } from '@/components/button/button-up'
import { Card } from '@/components/card/card'
import { Contributors } from '@/components/contributors/contributors'
import { Divider } from '@/components/divider/divider'
import { Header } from '@/components/header/header'
import { getSubMenuData } from '@/lib/db-utils'

type SubmenuPageProps = {
  params: {
    menu: string
    submenu: string
  }
}

export default async function SubmenuPage({ params }: SubmenuPageProps) {
  const data = getSubMenuData(params.menu, params.submenu)

  return (
    <>
      <Header title={data.title} description={data.description} />
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8'>
        {data.pageItems.map(item => (
          <Card key={item.imgPlaceholder} item={item} />
        ))}
      </div>
      <Divider className='p-4' />

      <Contributors isIndex={false} contributors={data.contributors} />
      <ButtonUp />
    </>
  )
}
