import React from 'react'

import TimeInput from '../TimeInput'
import FontAwesome from 'react-fontawesome'

import {getTimeDiff} from '../../TimeUtil'

const TimeView = ({
  id,
  times,
  inTimeID,
  outTimeID,
  punchCardID,
  handleChange,
  removeTime
}) => {

  let inTime = times.find(time => time.id === inTimeID)
  let outTime = times.find(time => time.id === outTimeID)

  let totalTime = {hour: 0, minute: 0}
  if(inTime !== undefined && outTime !== undefined)
    totalTime = getTimeDiff(inTime.minutes, outTime.minutes)

  return(
    <div key={id} style={{display:"flex", justifyContent: "center"}}>
      <div>
      <TimeInput {...inTime} punchCardID={punchCardID} type={'in'} onChange={handleChange}/>
      <TimeInput {...outTime} punchCardID={punchCardID} type={'out'} onChange={handleChange}/>
      <div>{totalTime.hour}:{totalTime.minute}</div>
      </div>
      <div style={{textAlign: "left", alignSelf: "center"}} onClick={
        () => { removeTime(id) }
        }><FontAwesome className='btn-delete' name='trash' /></div>
    </div>
  )
}

export default TimeView;
