import { render, waitFor } from '@/lib/test-utils'

import { SidebarMenu } from '../sidebar-menu'

// TODO: https://nextjs.org/docs/app/building-your-application/testing#async-server-components
describe('<SidebarMenu />', () => {
	test.skip('renders correctly', async () => {
		const { getByText } = render(<SidebarMenu className='col-span-1' />)

		await waitFor(() => {
			expect(getByText('Home')).toBeInTheDocument()
		})
	})
})
