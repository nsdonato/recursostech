import { ButtonUp } from '@/components/button/button-up'
import { Divider } from '@/components/divider/divider'
import { Header } from '@/components/header/header'

export default async function Slugs({ params }: any) {
  console.log('params - menu', params)
  return (
    <>
      <Header title={params.menu} description={''} />

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8'></div>
      <Divider className='p-4' />

      <ButtonUp />
    </>
  )
}
