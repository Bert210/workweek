import React from 'react'

import TimeSetter from './TimeSetter'

const logChange = (data) => {
  console.log(data)
}

const DayView = ({match}) => (
  <div>
    <TimeSetter onUpdate={logChange}/>
  </div>
)

export default DayView