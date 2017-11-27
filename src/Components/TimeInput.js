import React from 'react'

import { getTimeFromMinutes } from '../TimeUtil'

class TimeInput extends React.Component {
  constructor(props){
    super(props)

    this.currentTime = {
      ...getTimeFromMinutes(this.props.minutes)
    }

    console.log(this.currentTime)

  }

  handleChangeHour = (e) => {
    this.props.onChange({
      ...this.currentTime,
      hour: e.target.valueAsNumber
    })
  }
  handleChangeMinute = (e) => {
    this.props.onChange({
      ...this.currentTime,
      minute: e.target.valueAsNumber
    })
  }
  handleChangePM = (e) => {
    this.props.onChange({
      ...this.currentTime,
      pm: e.target.checked
    })
  }

  render() {
    return (
      <div>
        <input type="number" value={this.currentTime.hour} onChange={this.handleChangeHour}/>
        <input type="number" value={this.currentTime.minute} onChange={this.handleChangeMinute}/>
        <input type="checkbox" checked={this.currentTime.pm} onChange={this.handleChangePM}/>
      </div>
    )
  }
}

export default TimeInput
