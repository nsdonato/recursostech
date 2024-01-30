export const isToday = (date: Date) => {
  const today = new Date()

  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  )
}

// Show updated badge if updatedAt is within the last 2 days
export const isUpdated = (updatedAt: Date) => {
  const today = new Date()

  const limitDate = new Date(today)
  limitDate.setDate(today.getDate() - 2)

  return updatedAt >= limitDate && updatedAt <= today
}
