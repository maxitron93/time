const generateNewIntervalState = (newIntervalsArray) => {
  let newDays = 0
  let newFullHours = 0
  let newHours = 0
  let newMinutes = 0
  newIntervalsArray.forEach((current) => {
    newDays += current.days
    newFullHours += current.fullHours
    newHours += current.hours
    newMinutes += current.minutes
  })
  if (newMinutes >= 60) {
    let remainderHours = Math.floor(newMinutes / 60)
    let remainderMinutes = newMinutes % 60
    newHours += remainderHours
    newMinutes = remainderMinutes
    newFullHours += remainderHours
  }
  if (newHours >= 24) {
    let remainderDays = Math.floor(newHours / 24)
    let remainderHours = newHours % 24
    newHours = remainderHours
    newDays += remainderDays
  }
  let newIntervalState = {
    days: newDays,
    fullHours: newFullHours,
    hours: newHours,
    minutes: newMinutes
  }

  return newIntervalState
}

export { generateNewIntervalState }