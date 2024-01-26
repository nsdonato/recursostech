export const isToday = (date: Date) => {
	const today = new Date()

	return (
		today.getFullYear() === date.getFullYear() &&
		today.getMonth() === date.getMonth() &&
		today.getDate() === date.getDate()
	)
}

export const isThisWeekButNotToday = (date: Date) => {
	const today = new Date()

	const isSameWeek =
		date.getDate() - today.getDate() >= -today.getDay() &&
		date.getDate() - today.getDate() <= 6 - today.getDay()

	const isNotToday = !isToday(date)

	return isSameWeek && isNotToday
}
