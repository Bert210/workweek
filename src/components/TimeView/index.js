import React from 'react'

import TimeInput from '../TimeInput'
import FontAwesome from 'react-fontawesome'

import {getTimeDiff} from '../../TimeUtil'

const TimeView = () => {

  let inTime = this.props.times.find(time => time.id === this.props.inTimeID)
  let outTime = this.props.times.find(time => time.id === this.props.outTimeID)

  let totalTime = {hour: 0, minute: 0}
  if(inTime !== undefined && outTime !== undefined)
    totalTime = getTimeDiff(inTime.minutes, outTime.minutes)

  return(
    <div key={this.props.id} style={{display:"flex", justifyContent: "center"}}>
      <div>
      <TimeInput {...inTime} punchCardID={this.props.punchCardID} type={'in'} onChange={this.handleChange}/>
      <TimeInput {...outTime} punchCardID={this.props.punchCardID} type={'out'} onChange={this.handleChange}/>
      <div>{totalTime.hour}:{totalTime.minute}</div>
      </div>
      <div style={{textAlign: "left", alignSelf: "center"}} onClick={
        () => { this.props.removeTime(this.props.id) }
        }><FontAwesome className='btn-delete' name='trash' /></div>
    </div>
  )
}

export default TimeView;
