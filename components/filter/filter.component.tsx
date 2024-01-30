'use client'

import { useState } from 'react'

import { Card } from '../card/card'

export default function Filter({
  data,
  categories,
}: {
  data: any
  categories: string[]
}) {
  const [selected, setSelected] = useState(data.submenu)

  const onChangeSelected = (e: any) => {
    const selected = e.target.value
    if (selected) {
      const filtered = data.submenu.filter(
        (item: { category: string }) => item.category === selected
      )
      setSelected(filtered)
    } else {
      setSelected(data.submenu)
    }
  }
  return (
    <>
      <div className='flex items-center gap-2 mt-4'>
        <label htmlFor='filter'>Filtrar por:</label>
        <select
          className='py-1 ps-1 pe-3 ring-1 bg-base-100'
          name='filter'
          id='filter'
          onChange={onChangeSelected}>
          <option value=''>Todo</option>
          {categories.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4'>
        {selected.map((item: any) => (
          <Card key={item.imgPlaceholder} item={item} />
        ))}
      </div>
    </>
  )
}
