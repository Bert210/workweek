import React from 'react'

import TimePair from './TimePair'

const logChange = (event) => {
  console.log(event)
}

const DayView = () => (
  <TimePair onTimeChange={logChange}/>
)

export default DayView