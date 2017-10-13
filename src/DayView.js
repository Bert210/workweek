import React from 'react'

import TimePair from './TimePair'
import Button from './Button'

const logChange = (event) => {
  console.log(event)
}

const DayView = () => (
  <div>
    {/* <ViewBar> */}
    <div>
      <Button onClick={(e) => {console.log(e)}}>
        Add Time
      </Button>
      <Button onClick={() => {}}>
        Save
      </Button>
    </div>
    {/* </ViewBar> */}
    <TimePair onTimeChange={logChange}/>

  </div>
)

export default DayView