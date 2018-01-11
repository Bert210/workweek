import React, {Component} from 'react'

import {connect} from 'react-redux'

import Day from '../../components/Day';

// import DayTotalTime from '../DayTotalTime'
import {getMilitaryTimeFromMinutes} from '../../TimeUtil'

class DayContainer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount() {
    let totalMinutes = this.props.times.reduce( (total, current) => {
      if (current.dayRef === this.props.id){
        return total + current.totalTime.minute
      }else{ return 0; }
    }, 0)

    this.setState({
      ...getMilitaryTimeFromMinutes(totalMinutes)
    })
  }

  render() {
    return (
      <Day {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    times: state.times,
    // isActive:
  }
}

export default connect(mapStateToProps, null)(DayContainer)
