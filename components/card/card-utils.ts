import { InfoExtra } from '@/lib/tdx-types'

export const getConferenceInfo = (infoExtra: InfoExtra) => {
  return `${infoExtra?.country} - ${infoExtra?.city} | ${infoExtra?.date.days.join(', ')} de ${infoExtra?.date.month}`
}
