import React from 'react'

import { getTimeFromMinutes } from '../TimeUtil'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {addTime} from '../actions/time'
import {linkTimeToPunchCard} from '../actions/punchCard'

class TimeInput extends React.Component {
  constructor(props){
    super(props)
    if(this.props.minutes === undefined){
      console.log("minutes is undefined; create a new one")
      //How do we get the id from a reducer function
      this.props.addTime()

      this.props.linkTimeToPunchCard()
    }
  }



  componetWillMount() {
  }

  handleChangeHour = (e) => {
    this.props.onChange(this.props.id,{
      ...this.currentTime,
      hour: e.target.valueAsNumber
    })
  }
  handleChangeMinute = (e) => {
    this.props.onChange(this.props.id,{
      ...this.currentTime,
      minute: e.target.valueAsNumber
    })
  }
  handleChangePM = (e) => {
    this.props.onChange(
      this.props.id,
      {
      ...this.currentTime,
      pm: e.target.checked
    })
  }

  render() {
    this.currentTime = {...getTimeFromMinutes(this.props.minutes)}
    return (
      <div>
        <input type="number" value={this.currentTime.hour} onChange={this.handleChangeHour}/>
        <input type="number" value={this.currentTime.minute} onChange={this.handleChangeMinute}/>
        <input type="checkbox" checked={this.currentTime.pm} onChange={this.handleChangePM}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTime, linkTimeToPunchCard}, dispatch)
}

export default connect(null, mapDispatchToProps)(TimeInput)
