import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'

import DayContainer from '../containers/DayContainer'
import WeekTotalHours from './WeekTotalHours'

/* May need to convert this to a presental component */

class WeekView extends Component {
  render() {
    let days = this.props.days.map(day => {
      return (<Link key={day.id} to={`/day/${day.id}`} ><DayContainer {...day} /></Link>)
    })
    return (
      <div>
        {days}
        <div>Week Total: <WeekTotalHours/></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    days: state.days,
    times: state.times
  }
}

export default connect(mapStateToProps, null)(WeekView)
