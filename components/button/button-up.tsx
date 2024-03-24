import { WebLink } from '@/components/web-link/web-link'
import { EventNames } from '@/lib/metrics/metrics-types'

export const ButtonUp = () => {
  return (
    <WebLink
      eventName={EventNames.CLICK_ON_GO_TO_TOP_BUTTON}
      title='Back to the top'
      href='#top'
      className='lg:hidden btn btn-circle btn-accent fixed bottom-4 right-4'
      target=''>
      <svg
        width='40px'
        height='40px'
        viewBox='0 0 256 256'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M198.71094,57.28906v.00049A100.0002,100.0002,0,1,0,57.28906,198.71094,100.00037,100.00037,0,0,0,198.71094,57.28906Zm-5.65723,135.76465a92,92,0,1,1,0-130.10742A91.39545,91.39545,0,0,1,193.05371,193.05371Zm-26.08057-51.72949a3.99992,3.99992,0,1,1-5.94628,5.35156L128,109.97949,94.97314,146.67578a3.99992,3.99992,0,1,1-5.94628-5.35156l36-40a3.99976,3.99976,0,0,1,5.94628,0Z' />
      </svg>
    </WebLink>
  )
}
