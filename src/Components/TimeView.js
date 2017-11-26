import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {updateTime} from '../actions/time.js'

import TimeInput from '../Components/TimeInput'
import {getTimeFromMinutes} from '../TimeUtil'

class TimeView extends React.Component {
  handleInChange = (e) => {
    this.props.updateTime(
      this.props.id,
      {
        ...getTimeFromMinutes(this.props.inTime),
        ...e,
      }
    )
  }

  handleOutChange = (e) => {
  }

  render() {
    // let total = getMilitaryTimeFromMinutes(this.state.totalTime.minute) 
    return(
      <div key={this.props.id}>
        <TimeInput id={this.props.id} {...this.props.inTime} onChange={this.handleInChange}/>
        <TimeInput id={this.props.id} {...this.props.outTime} onChange={this.handleOutChange}/>

        <button className="btn-delete" onClick={
          () => { this.props.removeTime(this.props.id) } 
          }>&times;</button> 
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTime}, dispatch)
}


export default connect(null, mapDispatchToProps)(TimeView)
