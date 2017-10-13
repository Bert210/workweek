import React from 'react'

import TimePair from './TimePair'
import Button from './Button'

const logChange = (event) => {
  console.log(event)
}

const DayView = () => (
  <div>
    <TimePair onTimeChange={logChange}/>
    <Button onClick={(e) => {console.log(e)}}>
      Add Time
    </Button>
    <Button onClick={() => {}}>
      Save
    </Button>
  </div>
)

export default DayView