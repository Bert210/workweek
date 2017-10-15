import React from 'react'

import TimePair from '../TimePair/TimePair'
import Button from '../Buttons/Button'

const logChange = (event) => {
  console.log(event)
}

const SingleDayView = () => (
  <div>
    {/* <ViewBar> */}
    <div>
      <Button onClick={(e) => {console.log(e)}}>
        Add Time
      </Button>
    </div>
    {/* </ViewBar> */}
    <TimePair onTimeChange={logChange}/>

  </div>
)

export default SingleDayView