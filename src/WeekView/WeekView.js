import React, { Component } from 'react';
import {connect} from 'react-redux'

import Day from '../Day/Day'

/* May need to convert this to a presental component */

class WeekView extends Component {
  render() {
    //let days = this.createDays()

    return ( 
      <div>
      days.push(<Link to={linkTo} ><Day id={i} /></Link>)
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
