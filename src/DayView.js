import React from 'react'

import {connect} from 'react-redux';

const DayView = (props) => (
  <div>
    Hello inside DayView you are.
    <br/>
    {props.match.params.id}

    <button>Add Time</button>
  </div>
)

const mapStateToProps = (state) => ({
	// time: state.time
	// days: state.days
	count: state.count,
})

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps, null)(DayView)

/*
const mapStateToProps = (state) => ({
  active: state.days.active
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleActive, changeScreen}, dispatch);
}

export default connect(null, mapDispatchToProps)(WorkDay);
export default connect(mapStateToProps, mapDispatchToProps)(WorkDay);
*/