import React from 'react'
import {connect} from 'react-redux'

import TimeView from '../../components/TimeView';

import {updateTime} from '../../actions/time.js'

class TimeViewContainer extends React.Component {
  render() {
    return(
      <TimeView {...this.props} handleChange={this.props.updateTime} />
    )
  }
}

const mapStateToProps = (state) => ({
    times: state.times
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateTime: (id, event) => dispatch(updateTime(id, event)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TimeViewContainer)
