import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Day from './Day'

export default class WeekView extends Component {
  createDays = () => {
    let days = []
    for(let i = 0; i < 7; i++){
      let linkTo = `/day/${i}`
      days.push(<Link to={linkTo} ><Day id={i} /></Link>)
    }

    return days
  }

  render() {
    let days = this.createDays()

    return <div>
      Week of {this.props.of}
      {days}
      </div>
  }
}
