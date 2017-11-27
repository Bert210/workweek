import React from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {addTime, removeTime} from './actions/time'


import TimeView from './Components/TimeView'

const DayView = (props) => {
  let dayRef = parseInt(props.match.params.id, 10)

  let cards = props.punchCard.filter(card => {
    return card.dayRef === dayRef 
  })
  return (<div className="MainPane">
    <div>
      {cards.map(card => {
        return (
          <TimeView key={card.id} {...card} removeTime={props.removeTime}/> 
        )
      })}
    </div>
    
    <button onClick={() => { props.addTime(dayRef) }}>Add Time</button>
  </div>)
}

const mapStateToProps = (state) => ({
  punchCard: state.punchCard
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTime, removeTime}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(DayView)
