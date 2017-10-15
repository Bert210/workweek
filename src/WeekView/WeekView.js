import React, { Component } from 'react';

import Day from '../Day/Day'

export default class WeekView extends Component {
  createDays = () => {
    let days = []
    for(let i = 0; i < 7; i++){
      let linkTo = `/day/${i}`
      days.push(<Day id={i} />)
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
