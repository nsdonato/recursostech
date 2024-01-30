import { render } from '@/lib/test-utils'

import Filter from './filter.component'

const categories = ['category1', 'category2', 'category3']
const data = {
  submenu: [
    {
      titleCard: 'Card Title',
      infoExtra: undefined,
      cover: {
        src: '/frontend/vercel.svg',
        width: 100,
        height: 100,
      },
      imgPlaceholder: 'vercel placeholder',
      links: [
        {
          url: 'https://vercel.com',
          type: 'Web',
        },
      ],
      videos: [
        {
          url: 'https://vercel.com',
          tooltip: 'Vercel',
        },
      ],
      createdAt: '2024-01-14T00:00:00Z',
      updatedAt: '2024-01-14T00:00:00Z',
      category: 'Todo',
    },
  ],
}
describe('<Filter />', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Filter data={data} categories={categories} />)
    expect(getByText('Todo')).toBeInTheDocument()
  })
})
