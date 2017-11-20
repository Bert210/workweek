import React from 'react'
import TimeSetter from '../TimeSetter/TimeSetter'



const TimePair = ({onTimeChange}) => {
  let output = 0

  let updateTime = (data) => {
    onTimeChange(data)
  }

  return (
    <div>
      <TimeSetter id="in" onTimeChange={(e) => updateTime({type:e.type, value:e.value, clock:"In"})}/>
      <TimeSetter id="out" onTimeChange={(e) => updateTime({type:e.type, value:e.value, clock:"Out"})}/>
      <div className="timepair-output">{output}</div>
    </div>
  )
}

export default TimePair