import React from 'react'

import DayItem from './DayItem'

const ListDays = ({days, activeIndex}) => {
  // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  
  let rows = days.map( (day, index) => {
    console.log(day.times)
    let selected = activeIndex == index ? true : false

    return <DayItem key={index} selected={selected} name={day.name} hours={day.times[0].total.hours} minutes={day.times[0].total.minutes} active={day.active}/>
  })


  console.log(rows)
  return (
    <div>
      {rows}
    </div>
  )
}

export default ListDays;