import { InfoExtra } from '@/lib/db-types'

export const getConferenceInfo = (infoExtra: InfoExtra) => {
  return `${infoExtra?.country} - ${infoExtra?.city} | ${infoExtra?.date.days.join(', ')} de ${infoExtra?.date.month}`
}
