export const isToday = (date: Date) => {
	const today = new Date()

	return (
		today.getFullYear() === date.getFullYear() &&
		today.getMonth() === date.getMonth() &&
		today.getDate() === date.getDate()
	)
}

export const isUpdated = (updatedAt: Date) => {
	if(isToday(updatedAt)) return true

	const today = new Date()

	const isSameWeek =
		updatedAt.getDate() - today.getDate() >= -today.getDay() &&
		updatedAt.getDate() - today.getDate() <= 6 - today.getDay()

	return isSameWeek
}
