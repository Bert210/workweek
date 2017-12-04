import React from 'react'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {addTime, removeTime} from '../actions/time'
import {addPunchCard, removePunchCard} from '../actions/punchCard'

import cuid from 'cuid'



import TimeView from './TimeView'

const DayView = (props) => {
  let dayRef = parseInt(props.match.params.id, 10)
  const createPunchCard = () => {
    let inTimeID = cuid()
    let outTimeID = cuid()
  
    props.addTime(inTimeID)
    props.addTime(outTimeID)

    props.addPunchCard(dayRef, inTimeID, outTimeID)
    // dayRef
  }

  let cards = props.punchCard.filter(card => {
    return card.dayRef === dayRef 
  })
  return (<div className="MainPane">
    <div>
      {cards.map(card => {
        return (
          <TimeView key={card.id} punchCardID={card.id} {...card} removeTime={props.removePunchCard}/> 
        )
      })}
    </div>
    
    <button onClick={createPunchCard}>Add Time</button>
  </div>)
}



const mapStateToProps = (state) => ({
  punchCard: state.punchCard
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addPunchCard, removePunchCard, addTime}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(DayView)
