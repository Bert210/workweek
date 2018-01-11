import React from 'react'
import { connect } from 'react-redux'
import { dayTotalSelector } from '../selector/dayTotalSelector';

const WeekTotalHours = ({ dayTimes }) => {
    let reduceTime = dayTimes.reduce(
        (total, curr) => {
            total.hour += curr.hour;
            total.minute += curr.minute;

            return total;
        }
    , {hour:0, minute:0});

    return(<span>{reduceTime.hour}:{reduceTime.minute}</span>);
}

const mapStateToProps = (state) => {
    return {
        dayTimes: dayTotalSelector(state)
    }
}

export default connect(mapStateToProps, null)(WeekTotalHours);
