import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import TimeView from '../../components/TimeView';

import {updateTime} from '../../actions/time.js'

class TimeViewContainer extends React.Component {
  handleChange = (id, e) => {
    this.props.updateTime(id, e)
  }

  render() {
    return(
      <TimeView {...this.props} handleChange={this.handleChange} />
    )
  }
}

const mapStateToProps = (state) => ({
    times: state.times
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTime}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TimeViewContainer)
