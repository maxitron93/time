// Takes in an interval in ms and outputs an object with days, hours and minutes

const convertIntervalToTime = (intervalInMS, IntervalID) => {
  let days, fullHours, hours, minutes
  
  if (intervalInMS < 0) {
    days = Math.abs(Math.ceil( intervalInMS / (24*60*60*1000) ))
    fullHours = Math.abs(Math.ceil( intervalInMS / (60*60*1000) ))
    hours = Math.abs((days * 24 - fullHours))
    minutes = Math.abs(Math.round( (intervalInMS / (60*1000)) % 60 ))
  } else {
    days = Math.floor( intervalInMS / (24*60*60*1000) )
    fullHours = Math.floor( intervalInMS / (60*60*1000) )
    hours = (fullHours - days * 24)
    minutes = Math.round( (intervalInMS / (60*1000)) % 60 )
  }

  return {
    id: IntervalID,
    days: days,
    fullHours: fullHours,
    hours: hours,
    minutes: minutes
  }
}

// let testInterval = 381280500
// console.log(convertIntervalToTime(testInterval))
// console.log(convertIntervalToTime(-testInterval))

export { convertIntervalToTime }