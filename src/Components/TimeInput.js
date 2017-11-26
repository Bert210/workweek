import React from 'react'

import { getTimeFromMinutes } from '../TimeUtil'

class TimeInput extends React.Component {
  handleChangeHour = (e) => {
    this.props.onChange({
      hour: e.target.valueAsNumber
    })
  }
  handleChangeMinute = (e) => {
    this.props.onChange({
      minute: e.target.valueAsNumber
    })
  }
  handleChangePM = (e) => {
    this.props.onChange({
      pm: e.target.checked
    })
  }

  render() {
    let time = getTimeFromMinutes(this.props.minute)
    return (
      <div>
        <input type="number" value={time.hour} onChange={this.handleChangeHour}/>
        <input type="number" value={time.minute} onChange={this.handleChangeMinute}/>
        <input type="checkbox" checked={time.pm} onChange={this.handleChangePM}/>
      </div>
    )
  }
}

export default TimeInput
