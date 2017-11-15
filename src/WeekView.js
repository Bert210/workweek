import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Day from './Day'

export default class WeekView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      punchcards:[
        {id:0, dayPointer:1, time: {
          in:{hour: 8, min: 12},
          out: {hour: 13, min: 45},
          total: {hour: 5, min: 33}
        }},
      ]
    }
  }

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
