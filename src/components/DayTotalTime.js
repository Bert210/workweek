import React from 'react'

import {connect} from 'react-redux'

import {dayTotalSelector} from '../selector/dayTotalSelector'
import {pad} from '../FormatUtil'

const DayTotalTime = ({dayID, totalTime}) => {
    // console.l
    let {hour, minute} = totalTime[dayID]
    
    return (
        <span>{hour}:{pad(minute)}</span>
    )
}

const mapStateToProps = (state) => {
    return {
        totalTime: dayTotalSelector(state)
    }
}

export default connect(mapStateToProps, null)(DayTotalTime)