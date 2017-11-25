/** 
 * Converts minutes into an object with hour, minutes and am
 * @params {Number} minutes - the time in minutes
 * @returns {Object} - The object in standard time format
 */
export const getTimeFromMinutes = (minutes) => {
  console.log(minutes)
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

export const getMinutesFromTime = (time) => {
  let {hour, minute, pm} = time

  return (hour * 60) + minute + (pm ? 12*60 : 0)
}
