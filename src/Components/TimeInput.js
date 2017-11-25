import React from 'react'

import TimeStateManager from './TimeState/TimeStateManager'
import { getTimeFromMinutes } from '../TimeUtil'

class TimeInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ...getTimeFromMinutes(this.props.minute),
      rawTime: this.props.minute
    }
  }

  updateRawTime = () => {
  }

  handleChangeHour = (e) => {
    this.setState({
      hour: e.target.valueAsNumber
    })

  }

  handleChangeMinute = (e) => {
  }

  handleChangeAMPM = (e) => {
  }

  render() {
    return (
      <div>
        <TimeStateManager />
        {/* <input 
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
        </label> */}
      </div>
    )
  }
}

export default TimeInput
