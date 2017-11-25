import React from 'react'

import {getTimeFromMinutes, getMinutesFromTime} from '../TimeUtil'

class TimeInput extends React.Component {
  constructor(props){
    super(props)
    this.state = getTimeFromMinutes(this.props.minute)
    console.log(this.state)

    console.log(getMinutesFromTime(this.state))
  }

  handleChangeHour = (e) => {
    console.log(e.target.valueAsNumber)
  }
  handleChangeMinute = (e) => {
    console.log(e.target.valueAsNumber)
  }
  handleChangeAMPM = (e) => {
    console.log(e.target.checked)
  }

  render() {
    return (
      <div> 
        <input 
          type="number" 
          defaultValue={this.state.hour} 
          onChange={this.handleChangeHour}
        />
        <input 
          type="number"
          defaultValue={this.state.minute}
          onChange={this.handleChangeMinute}
        />
        <label>PM:
          <input 
            type="checkbox"
            checked={this.state.pm}
            onChange={this.handleChangeAMPM} 
          />
        </label>
      </div>
    )
  }
}

export default TimeInput
