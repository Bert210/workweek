import React from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {addTime, removeTime} from './actions/time'


import TimeView from './Components/TimeView'

const DayView = (props) => {
  let dayRef = parseInt(props.match.params.id, 10)

  let times = props.time.filter(time => {
    return time.dayRef === dayRef 
  })
  return (<div className="MainPane">
    <div>
      {times.map(time => {
        return (
          <TimeView key={time.id} {...time} removeTime={props.removeTime}/> 
        )
      })}
    </div>
    
    <button onClick={() => { props.addTime(dayRef) }}>Add Time</button>
  </div>)
}

const mapStateToProps = (state) => ({
  time: state.times,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTime, removeTime}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(DayView)
