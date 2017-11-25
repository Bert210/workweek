/** 
 * Converts minutes into an object with hour, minutes and am
 * @params {Number} minutes - the time in minutes
 * @returns {Object} - The object in standard time format
 */
export const getTimeFromMinutes = (minutes) => {
  if(minutes < 0) return null
  let pm = minutes >= (12 * 60) ? true : false;
  if(pm){
    minutes -= 12*60
  }
  let hour = 0

  while(minutes > 60) {
    hour += 1
    minutes -= 60
  } 
  return {
    hour,
    minute: minutes,
    pm
  }
}

/**
 * Converts the 12 hour format time into minutes
 * @params {Object} time - {hour, minute, pm}
 * @returns {Number} - the time in minutes
 */
export const getMinutesFromTime = (time) => {
  let {hour, minute, pm} = time

  return (hour * 60) + minute + (pm ? 12*60 : 0)
}

/**
 * Converts minutes into 24 hour time format
 * @params {Number} minutes - the time in minutes
 * @returns {Object} - The time in military format
 */
export const getMilitaryTimeFromMinutes = (minutes) => {

  let hour = 0

  while(minutes > 60){
    hour += 1
    minutes -= 60
  }

  return {
    hour,
    minute:minutes
  }
}
