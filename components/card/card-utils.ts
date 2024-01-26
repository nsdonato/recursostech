import { InfoExtra } from '@/lib/mdx/get-menu-item'

export const getConferenceInfo = (infoExtra: InfoExtra) => {
	return `${infoExtra?.country} - ${infoExtra?.city} | ${infoExtra?.date.days.join(', ')} de ${infoExtra?.date.month}`
}
