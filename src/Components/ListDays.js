import React from 'react'

import DayItem from './DayItem'
import {NavLink} from 'react-router-dom'

const ListDays = ({days, activeIndex}) => {
  // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  
  let rows = days.map( (day, index) => {
    let selected = activeIndex === index ? true : false
    let link = `/days/${index}`
    return (
      
      <NavLink to={link}>
        <DayItem key={index} selected={selected} name={day.name} hours={day.times[0].total.hours} minutes={day.times[0].total.minutes} active={day.active}/>
      </NavLink>
    )
  })

  return (
    <div>
      {rows}
    </div>
  )
}

export default ListDays;