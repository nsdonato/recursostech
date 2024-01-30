import { Card } from '@/components/card/card'
import { Contributors } from '@/components/contributors/contributors'
import { Divider } from '@/components/divider/divider'
import Filter from '@/components/filter/filter.component'
import { Header } from '@/components/header/header'
import { getMenuItem } from '@/lib/mdx/get-menu-item'
import { Contributor } from '@/lib/mdx/mdx-utils'

export default async function Slug({ params }: { params: { slug: string[] } }) {
  const { data } = await getMenuItem(params.slug)

  if (!data) return null

  const categories = Array.from(
    new Set(data.submenu.map(item => item.category))
  )

  return (
    <>
      <Header title={data.title} description={data.description} />

      {data.filter ? (
        <Filter data={data} categories={categories} />
      ) : (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8'>
          {data.submenu.map(item => (
            <Card key={item.imgPlaceholder} item={item} />
          ))}
        </div>
      )}
      <Divider className='p-4' />

      <Contributors
        isIndex={false}
        contributors={data?.contributors as Contributor[]}
      />
    </>
  )
}
