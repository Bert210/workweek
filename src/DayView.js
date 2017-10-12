import React from 'react'


const DayView = ({match}) => (
  <div>
    Hello inside DayView you are.
    {match.params.id}
  </div>
)

export default DayView