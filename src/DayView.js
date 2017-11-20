import React from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {addTime, removeTime} from './actions/time'


import TimeView from './components/TimeView'

const DayView = (props) => {
  let dayRef = props.match.params.id

  let times = props.time.filter(time => {
    return time.dayRef == props.match.params.id
  })
  return (<div className="MainPane">
    Hello inside DayView you are.
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
	// days: state.days
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTime, removeTime}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(DayView)
