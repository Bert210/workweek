import React from 'react'


const TimeView = ({id, dayRef, inTime, outTime, totalTime, removeTime}) => (
  <div>
    <span>In: {inTime.hour}:{inTime.minute}</span>
    <br/>
    <span>Out: {outTime.hour}:{outTime.minute}</span>
    <br/>
    <span>Total: {totalTime.hour}:{totalTime.minute}</span>
    <button onClick={
      () => { removeTime(id) } 
      }>&times;</button> 
  </div>
)


export default TimeView
