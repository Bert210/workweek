import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {updateTime} from '../actions/time.js'

import TimeInput from '../Components/TimeInput'
import {getTimeDiff} from '../TimeUtil'

class TimeView extends React.Component {
  handleChange = (id, e) => {
    this.props.updateTime(id, e)
  }

  render() {
    let inTime = this.props.times.find(time => time.id === this.props.inTimeID)
    let outTime = this.props.times.find(time => time.id === this.props.outTimeID)

    let totalTime = {hour: 0, minute: 0}
    if(inTime !== undefined && outTime !== undefined)
      totalTime = getTimeDiff(inTime.minutes, outTime.minutes)
      
    return(
      <div key={this.props.id}>
        <TimeInput {...inTime} punchCardID={this.props.punchCardID} type={'in'} onChange={this.handleChange}/>
        <TimeInput {...outTime} punchCardID={this.props.punchCardID} type={'out'} onChange={this.handleChange}/>
        <div>{totalTime.hour}:{totalTime.minute}</div>
        <button className="btn-delete" onClick={
          () => { this.props.removeTime(this.props.id) } 
          }>&times;</button> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    times: state.times
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTime}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TimeView)
