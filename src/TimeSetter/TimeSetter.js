import React from 'react'


const TimeSetter = ({match, onTimeChange}) => {
  let hour = 8
  let minute = 30
  let isPM = false


  const updateHour = (e) => {
    hour = e.target.value
    onTimeChange({type:"hour", value:hour})
  }

  const updateMinute = (e) => {
    minute = e.target.value
    onTimeChange({type:"minute", value:minute})
  }

  const updatePM = (e) => {
    isPM = e.target.value
    onTimeChange({type:"pm", value:isPM})
  }

  return (
    <div>
      <input 
        id="hour" 
        type="number" 
        defaultValue={hour} 
        onChange={updateHour}/>
      :
      <input 
        id="minute" 
        type="number" 
        defaultValue={updateMinute}/> 
      <input 
        id="pm" 
        type="checkbox" 
        defaultChecked={updatePM}/> PM

        <div>{hour}:{minute} {isPM ? "PM" : "AM"}</div>
    </div>
  );
}

export default TimeSetter