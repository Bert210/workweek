import React from 'react'

import {connect} from 'react-redux';

const DayView = ({match}) => (
  <div>
    Hello inside DayView you are.
    <br/>
    {match.params.id}

    <button>Add Time</button>
  </div>
)

const mapStateToProps = (state) => ({
	// time: state.time
})

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(DayView)

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