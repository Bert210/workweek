import React from 'react'

import {connect} from 'react-redux'

import {totalSelector} from '../selector/totalTime'
import {pad} from '../FormatUtil'

const DayTotalTime = ({dayID, totalTime}) => {
    let {hour, minute} = totalTime[dayID]
    
    return (
        <span>{hour}:{pad(minute)}</span>
    )
}

const mapStateToProps = (state) => {
    return {
        totalTime: totalSelector(state)
    }
}

export default connect(mapStateToProps, null)(DayTotalTime)