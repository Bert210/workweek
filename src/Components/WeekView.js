import React, { Component } from 'react';
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import Day from '../Components/Day'

/* May need to convert this to a presental component */

class WeekView extends Component {
  render() {
    let days = this.props.days.map(day => {
      return (<Link key={day.id} to={`/day/${day.id}`} ><Day {...day} /></Link>)
    })
    return ( 
      <div>
        {days}
        <div>Week Total:</div>
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
