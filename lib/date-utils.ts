export const isToday = (date: Date) => {
  const today = new Date()

  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  )
}

// Show updated badge if updatedAt is within the last 3 days
export const isUpdated = (updatedAt: Date) => {
  const fechaActual = new Date()

  const fechaLimite = new Date(fechaActual)
  fechaLimite.setDate(fechaActual.getDate() - 3)

  return updatedAt >= fechaLimite && updatedAt <= fechaActual
}
