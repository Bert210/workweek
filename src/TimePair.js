import React from 'react'
import TimeSetter from './TimeSetter'

const TimePair = ({onTimeChange}) =>(
  <div>
    <TimeSetter onTimeChange={(e) => onTimeChange({type:e.type, value:e.value, clock:"In"})}/>
    <TimeSetter onTimeChange={(e) => onTimeChange({type:e.type, value:e.value, clock:"Out"})}/>
  </div>
)

export default TimePair